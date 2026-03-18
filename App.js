import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    console.log("Aplicativo de Cadastro Iniciado com Sucesso!");
  }, []);

  return (
    <ImageBackground 
      source={require('./assets/splash-icon.png')} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <View style={styles.form}>
            <Image 
              source={require("./assets/icon.png")}
              style={styles.logo}
            />
            
            <Text style={styles.titulo}>Formulário de Cadastro</Text>
            
            <Text>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              onChangeText={setNome}
            />

            <Text>Curso:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu curso"
              onChangeText={setCurso}
            />

            <Text>Disciplina:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a disciplina"
              onChangeText={setDisciplina}
            />

            <Text>Descrição Pessoal:</Text>
            <TextInput
              style={[styles.input, styles.inputMultilinha]}
              placeholder="Fale um pouco sobre você..."
              onChangeText={setDescricao}
              multiline={true}
              numberOfLines={3}
            />

            <Button
              style={[styles.botao]}
              title="Enviar Dados"
              onPress={() => setExibir(true)}
            />
          </View>

          {exibir && (
            <View style={styles.resultado}>
              <Text style={styles.subtitulo}>Dados Cadastrados:</Text>
              <Text>Nome: {nome}</Text>
              <Text>Curso: {curso}</Text>
              <Text>Disciplina: {disciplina}</Text>
              <Text>Descrição: {descricao}</Text>
            </View>
          )}

        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  botao: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    marginTop: 5,
    backgroundColor: '#e7aec8',
  },
  logo: {
    width: 80,             
    height: 80,            
    resizeMode: 'contain', 
    alignSelf: 'center',
    marginBottom: 10,  
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#bb687a',
    
  },
  form: {
    width: '100%',
    marginBottom: 30,
    padding: 20,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    marginTop: 5,
    backgroundColor: '#e7aec8',
  },
  inputMultilinha: {
    height: 80,
    textAlignVertical: 'top',
  },
  resultado: {
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#c87c8d',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});