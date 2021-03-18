import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      img: 'https://www.belasmensagens.com.br/wp-content/uploads/2018/08/que-o-dia-comece-bem.jpg',
      frase: 'Clique para gerar novas frases'
    }
    this.frases=[
      {frase: 'Em briga de saci qualquer chute é voadora.', url: 'https://static.mundodasmensagens.com/upload/textos/e/m/em-briga-de-saci-qualquer-chute-e-uma-voadora-3goWp-w.jpg' },
      {frase: 'Eae fake!', url: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2019/06/neymar-najila-trindade-memes-7.png'},
      {frase: 'Quer namorar comigo?', url: 'https://cdn.pensador.com/img/imagens/ma/rt/martin_luther_king_suba_primeiro_degrau_com_fe.jpg'},
      {frase: 'O Palmeiras não tem mundial', url: 'https://www.dci.com.br/wp-content/uploads/2020/12/craque-neto_Easy-Resize.com_-e1609125116948.jpg'},
      {frase: 'Cuidado com a mentira, ela não é a verdade', url: 'https://i.pinimg.com/736x/bd/fc/6e/bdfc6eb8eeaf4f1900c505fae9b84b4e.jpg'}
    ]
    this.enviar = this.enviar.bind(this)
  }

  enviar(){
    const positionArray = Math.floor(Math.random()*5)
    const positionImg = this.frases[positionArray].url
    const positionfrase = this.frases[positionArray].frase
    this.setState({img: positionImg})
    this.setState({frase: positionfrase})
  }


  render(){
    
    return(
      <View style={styles.container}>
       <Image 
          source={{uri: this.state.img}}
          style= {{width: 300, height: 300, marginVertical:20}}
      />
       <Text style={styles.texto}>{this.state.frase}</Text>
        <Button
          title='Nova frase'
          onPress={this.enviar}
        />
       
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 5
  },
  texto: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5
  }
});
