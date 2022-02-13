import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import brandImg from '@assets/brand.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(`E-MAIL: ${email} PASSWORD: ${password}`)
  function handleSignIn() {
    console.log("=> =>")
  }

  function handleForgotPassword() {
    console.log("=> =>")
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={() => handleForgotPassword()}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <GestureHandlerRootView>
            <Button
              title="Entrar"
              type="secondary"
              onPress={() => handleSignIn()}
              isLoading={false}
            />
          </GestureHandlerRootView>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}