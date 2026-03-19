import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [exibir, setExibir] = useState(false);
 
  useEffect(() => {
    console.log("BOOKY iniciado com sucesso!");
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
           
            <Text style={styles.titulo}>Cadastre-se no BOOKY</Text>
           
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#888"
              onChangeText={setNome}
            />
 
            <Text style={styles.label}>Curso:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu curso"
              placeholderTextColor="#888"
              onChangeText={setCurso}
            />
 
            <Text style={styles.label}>Disciplina:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a disciplina"
              placeholderTextColor="#888"
              onChangeText={setDisciplina}
            />
 
            <Text style={styles.label}>Descrição Pessoal:</Text>
            <TextInput
              style={[styles.input, styles.inputMultilinha]}
              placeholder="Fale um pouco sobre você..."
              placeholderTextColor="#888"
              onChangeText={setDescricao}
              multiline={true}
              numberOfLines={3}
            />
 
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                if (nome.trim() && curso.trim() && disciplina.trim() && descricao.trim()) {
                  setExibir(true);
                } else {
                  alert("Por favor, preencha todos os campos antes de enviar.");
                  setExibir(false);
                }
              }}
            >
  <Text style={styles.textoBotao}>ENVIAR DADOS</Text>
</TouchableOpacity>
          </View>
 
          {exibir && (
            <View style={styles.resultado}>
              <Text style={styles.subtitulo}>Dados Cadastrados:</Text>
             
              <Text style={styles.textoResultado}>
                <Text style={styles.bold}>Nome:</Text> {nome}
              </Text>
             
              <Text style={styles.textoResultado}>
                <Text style={styles.bold}>Curso:</Text> {curso}
              </Text>
             
              <Text style={styles.textoResultado}>
                <Text style={styles.bold}>Disciplina:</Text> {disciplina}
              </Text>
             
              <Text style={styles.textoResultado}>
                <Text style={styles.bold}>Descrição:</Text> {descricao}
              </Text>
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
  form: {
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  label: {
    color: '#bb687a',
    fontWeight: '600',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#bb687a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e7aec8',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
  },
  inputMultilinha: {
    height: 80,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#ff85a2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultado: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fce4ec',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#bb687a',
    marginBottom: 40,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#bb687a',
  },
  textoResultado: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#bb687a',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
 