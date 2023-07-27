import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { BLACK, WHITE } from '../constant/theme';
import { loginStyle } from '../styles/loginStyle';
import { Button } from '@rneui/base';
import { useEffect, useState } from 'react';


const SignInScreen = () => {
  const [formValue,setFormValue]=useState({
    userName:"",
    password:""
  })
  const [errorMsg, setErrorMsg] = useState({
    userName: null,
    password: null
  });

  useEffect(()=>{
    setFormValue({
      userName:"",
      password:""
    })
  },[])

  const onSave = async () => {
    if (formValue.userName && formValue.password) {
      setLoading(true);
      console.log(formValue.userName && formValue.password, "jhg");
      const payload = {
        userName: formValue.userName,
        password: formValue.password
      };
      try {
        const res = await api.mobileSignup(payload);
        if (res?.data && res.data && res.data) {
          await AsyncStorage.setItem('accessToken', res.data.accessToken);
          navigation.navigate("MainTab");
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setFormValue({
          userName: "",
          password: ""
        })
        setLoading(false);
      }
    }
  }
  const onChangeForm = (name, text, isNumber = false) => {
    if (isNumber) {
      setFormValue({ ...formValue, [name]: text.replace(NUMBER_REGEX, "") });
      setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
    } else {
      setFormValue({ ...formValue, [name]: text });
      setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
    }
  }
  return (
    <SafeAreaView style={loginStyle.dashboardContainer}>
      <StatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <View>
        <Text style={{ alignSelf: "center", marginTop: "30%", fontSize: 30 }}>Welcome Back</Text>
        <Text style={{ alignSelf: "center" }}>Please enter your username and password here </Text>
      </View>
      <View style={{top:60}}>
        <View style={loginStyle.container}>
          <View style={styles.verticalLine} />
          <TextInput
            style={styles.inputText}
            maxLength={10}
            placeholder="Username"
          />
        </View>
        <View style={loginStyle.container}>
          <View style={styles.verticalLine} />
          <TextInput
            style={styles.inputText}
            maxLength={10}
            placeholder="Password"
          />
        </View>
      </View>
      <Pressable onPress={() => onSave()}>
        <Button titleStyle={loginStyle.buttonTextMd} buttonStyle={loginStyle.button}>Sign In</Button>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  inputText: {
    flex: 1,
    paddingLeft: 20,
    marginHorizontal: 30,
    borderRadius: 2,
    borderWidth: 2,

  },
  verticalLine: {
    borderLeftWidth: 4,
    height: '100%',
    left: 31
  },
});
export default SignInScreen;