import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useAuth } from '@hooks/auth';
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
  const { isLogging, signIn } = useAuth()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    await signIn(email, password);
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
              isLoading={isLogging}
            />
          </GestureHandlerRootView>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}