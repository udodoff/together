import { Stack } from 'expo-router';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  login: string;
  password: string;
};

export default function Auth() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit(data => {});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: 'Authorization',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>Login</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="login"
      />
      {errors.login && <Text>This is required.</Text>}
      <Text>Password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <Button title="Sign in" color="#f194ff" onPress={onSubmit} />
    </View>
  );
}
