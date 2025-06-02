import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Modal, TextInput, Switch, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [selectedBetoneira, setSelectedBetoneira] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [tipoBetoneira, setTipoBetoneira] = useState('pequena');
  const [horarioEntrega, setHorarioEntrega] = useState('manha');
  const [duracao, setDuracao] = useState(1);
  const [quantidade, setQuantidade] = useState(1);
  const [incluirOperador, setIncluirOperador] = useState(false);
  const [transporteIncluso, setTransporteIncluso] = useState(false);

  const infoBetoneiraRedes = {
    descricao: "Especializada em locação de betoneiras para construção civil, oferecemos equipamentos modernos e bem conservados para atender desde pequenas reformas até grandes obras.",
    vantagens: [
      { icon: 'engineering', text: "Equipamentos revisados semanalmente" },
      { icon: 'local-shipping', text: "Transporte gratuito na região" },
      { icon: 'support-agent', text: "Assistência 24h disponível" },
      { icon: 'attach-money', text: "Melhor custo-benefício do mercado" },
      { icon: 'verified', text: "Garantia de satisfação" }
    ],
    valorMedio: "R$ 300/dia",
    equipamentos: "5 modelos"
  };

  const betoneiras = [
    {
      id: 1,
      imagem: 'https://images.tcdn.com.br/img/img_prod/1322851/betoneira_150_litros_monofasico_1_2hp_com_chave_de_seguranca_motomil_1611_1_8cd0dbe62056dcf6e89f7ddcfd6a6fc0.jpg',
      nome: 'Betoneira 150L Standard',
      descricaoDetalhada: 'A Betoneira 150L Standard é ideal para pequenas obras e reformas residenciais, com capacidade para misturar até 150 litros de concreto por ciclo. Seu motor monofásico de 1/2 HP oferece eficiência energética e potência adequada para trabalhos contínuos. Equipada com chave de segurança, tambor em aço resistente e sistema de inclinação manual, proporciona facilidade de operação e durabilidade. Perfeita para preparo de argamassas, concretos e outros materiais de construção, com baixo nível de ruído e manutenção simplificada.',
      descricao: 'Solução compacta para pequenas obras e reformas residenciais',
      preco: 'R$ 200/dia',
      capacidade: '150 litros',
      potencia: '1/2 HP',
      features: ['Monofásica', 'Chave de segurança', 'Baixo consumo']
    },
    {
      id: 2,
      imagem: 'https://ferramentasgerais.vteximg.com.br/arquivos/ids/822061/Betoneira-400-L-20-cv-220-V~-monofasica-MAX-PRO-400L-CSM---71000220---CSM.jpg?v=638688055741500000',
      nome: 'Betoneira 400L Pro',
      descricaoDetalhada: 'A Betoneira 400L Pro foi desenvolvida para obras de médio e grande porte, com capacidade industrial de 400 litros e motor robusto de 2 HP. Seu sistema auto-limpante reduz o tempo de manutenção e aumenta a produtividade no canteiro de obras. A estrutura reforçada em aço carbono garante resistência a impactos e vibrações, enquanto o sistema de inclinação hidráulico facilita a descarga do material. Ideal para construtoras e empreiteiras que necessitam de alta produção diária de concreto com qualidade e uniformidade na mistura.',
      descricao: 'Alta produtividade para obras de grande porte',
      preco: 'R$ 500/dia',
      capacidade: '400 litros',
      potencia: '2 HP',
      features: ['Monofásica', 'Auto-limpante', 'Estrutura reforçada']
    },
    {
      id: 3,
      imagem: 'https://cdn.leroymerlin.com.br/products/betoneira_csm_cs_250_litros_1_cv_trifasica_220v_1566727936_8d9e_600x600.jpg',
      nome: 'Betoneira 250L Industrial',
      descricaoDetalhada: 'A Betoneira Industrial 250L trifásica oferece o equilíbrio perfeito entre capacidade e versatilidade para obras comerciais e industriais. Com motor de 1 HP e sistema trifásico, proporciona torque constante e maior vida útil em operações contínuas. Seu sistema de baixa vibração reduz o desgaste dos componentes e o ruído operacional, enquanto o controle digital permite ajuste preciso da velocidade de mistura. Tambor em aço especial com tratamento anticorrosivo e pás de mistura em formato helicoidal para homogeneização superior do concreto.',
      descricao: 'Equilíbrio perfeito entre capacidade e versatilidade',
      preco: 'R$ 300/dia',
      capacidade: '250 litros',
      potencia: '1 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    },
    {
      id: 4,
      imagem: 'https://casadopicapau.vtexassets.com/arquivos/ids/162122/01.jpg?v=637974770623970000',
      nome: 'Betoneira 350L Industrial',
      descricaoDetalhada: 'A Betoneira 350L Industrial é a escolha profissional para obras que demandam alta produtividade e confiabilidade. Com capacidade de 350 litros e motor trifásico de 1,5 HP, oferece desempenho superior em aplicações comerciais. Seu sistema de transmissão por correias trapezoidais proporciona maior durabilidade e menor necessidade de manutenção. Estrutura em tubo de aço carbono com pintura eletrostática, rodas giratórias para fácil locomoção e sistema de segurança com proteção térmica do motor. Ideal para preparo de concreto usinado, argamassas especiais e outros materiais de construção.',
      descricao: 'Versátil e robusta para obras comerciais',
      preco: 'R$ 380/dia',
      capacidade: '350 litros',
      potencia: '1,5 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    },
    {
      id: 5,
      imagem: 'https://cdn.leroymerlin.com.br/products/betoneira_cs_400l_rental_force_mono_127v_csm_92016463_f4a5_600x600.jpg',
      nome: 'Betoneira 400L Industrial',
      descricaoDetalhada: 'A Betoneira Industrial 400L é equipamento de alto desempenho para grandes obras e projetos industriais. Com motor trifásico de 2 HP e capacidade para 400 litros, garante produção contínua de concreto com qualidade uniforme. Seu sistema de controle digital avançado permite programação de ciclos de mistura e monitoramento de temperatura do motor. Tambor em aço especial com revestimento interno antiaderente, pás de mistura substituíveis e estrutura basculante hidráulica para descarga rápida e eficiente. Inclui freio de segurança, proteção contra sobrecarga e sistema de lubrificação automática para máxima durabilidade e segurança operacional.',
      descricao: 'Alta capacidade para projetos industriais',
      preco: 'R$ 500/dia',
      capacidade: '400 litros',
      potencia: '2 HP',
      features: ['Trifásica', 'Baixa vibração', 'Controle digital']
    }
  ];

  const openDetails = (betoneira) => {
    setSelectedBetoneira(betoneira);
    setModalVisible(true);
  };

  const closeDetails = () => {
    setModalVisible(false);
  };

  const handleEnviar = () => {
    alert(`Pedido enviado por ${nome}`);
  };

  const handleLimpar = () => {
    setNome('');
    setTelefone('');
    setEndereco('');
    setObservacoes('');
    setTipoBetoneira('pequena');
    setHorarioEntrega('manha');
    setDuracao(1);
    setQuantidade(1);
    setIncluirOperador(false);
    setTransporteIncluso(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cabecalho}>
        <View style={styles.headerContent}>
          <Text style={styles.titulo}>BETONEIRA REDES</Text>
          <Text style={styles.subtituloHeader}>Soluções em equipamentos para construção</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Aluguel com garantia de qualidade</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>SOBRE NOSSA EMPRESA</Text>
        <Text style={styles.descricao}>{infoBetoneiraRedes.descricao}</Text>
        
        <View style={styles.vantagensContainer}>
          {infoBetoneiraRedes.vantagens.map((item, index) => (
            <View key={index} style={styles.vantagemItem}>
              <MaterialIcons name={item.icon} size={24} color="#2E86C1" />
              <Text style={styles.vantagemText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="stars" size={32} color="#F1C40F" />
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Anos no mercado</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="construction" size={32} color="#2E86C1" />
          <Text style={styles.statNumber}>{infoBetoneiraRedes.equipamentos}</Text>
          <Text style={styles.statLabel}>Modelos</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="location-city" size={32} color="#E74C3C" />
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Clientes ativos</Text>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>SOLICITAR ALUGUEL</Text>
        
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Digite seu nome" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholder="Digite seu telefone" keyboardType="phone-pad" />

        <Text style={styles.label}>Endereço</Text>
        <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder="Endereço de entrega" />

        <Text style={styles.label}>Observações</Text>
        <TextInput style={styles.input} value={observacoes} onChangeText={setObservacoes} placeholder="Alguma observação?" multiline />

        <Text style={styles.label}>Tipo de Betoneira</Text>
        <Picker selectedValue={tipoBetoneira} onValueChange={setTipoBetoneira} style={styles.picker}>
          <Picker.Item label="Pequena" value="pequena" />
          <Picker.Item label="Média" value="media" />
          <Picker.Item label="Grande" value="grande" />
        </Picker>

        <Text style={styles.label}>Horário de Entrega</Text>
        <Picker selectedValue={horarioEntrega} onValueChange={setHorarioEntrega} style={styles.picker}>
          <Picker.Item label="Manhã" value="manha" />
          <Picker.Item label="Tarde" value="tarde" />
          <Picker.Item label="Noite" value="noite" />
        </Picker>

        <Text style={styles.label}>Duração do Aluguel (dias): {duracao}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={30}
          step={1}
          value={duracao}
          onValueChange={setDuracao}
        />

        <Text style={styles.label}>Quantidade de Betoneiras: {quantidade}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={quantidade}
          onValueChange={setQuantidade}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Incluir Operador</Text>
          <Switch value={incluirOperador} onValueChange={setIncluirOperador} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Transporte Incluso</Text>
          <Switch value={transporteIncluso} onValueChange={setTransporteIncluso} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Enviar Pedido" onPress={handleEnviar} color="#4CAF50" />
          <View style={{ marginTop: 10 }} />
          <Button title="Limpar" onPress={handleLimpar} color="#f44336" />
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>NOSSA FROTA</Text>
        <Text style={styles.subtituloSecao}>Equipamentos para todas as necessidades</Text>
        
        {betoneiras.map((betoneira) => (
          <TouchableOpacity 
            key={betoneira.id} 
            style={styles.card}
            onPress={() => openDetails(betoneira)}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: betoneira.imagem }}
                style={styles.imagem}
                resizeMode="contain"
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>DESTAQUE</Text>
              </View>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.nomeBetoneira}>{betoneira.nome}</Text>
              <Text style={styles.descricaoCard}>{betoneira.descricao}</Text>
              
              <View style={styles.featuresContainer}>
                {betoneira.features.map((feature, index) => (
                  <View key={index} style={styles.featurePill}>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.precoContainer}>
                <Text style={styles.preco}>{betoneira.preco}</Text>
                <View style={styles.specs}>
                  <Text style={styles.specText}><MaterialIcons name="invert-colors" size={16} /> {betoneira.capacidade}</Text>
                  <Text style={styles.specText}><MaterialIcons name="bolt" size={16} /> {betoneira.potencia}</Text>
                </View>
              </View>
              
              <TouchableOpacity 
                style={styles.botao}
                onPress={() => openDetails(betoneira)}
              >
                <Text style={styles.botaoText}>VER DETALHES</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDetails}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedBetoneira && (
              <>
                <Image
                  source={{ uri: selectedBetoneira.imagem }}
                  style={styles.modalImage}
                  resizeMode="contain"
                />
                <Text style={styles.modalTitle}>{selectedBetoneira.nome}</Text>
                <ScrollView style={styles.modalScroll}>
                  <Text style={styles.modalDescription}>
                    {selectedBetoneira.descricaoDetalhada}
                  </Text>
                  <View style={styles.modalSpecs}>
                    <Text style={styles.modalSpecItem}><MaterialIcons name="invert-colors" size={16} /> Capacidade: {selectedBetoneira.capacidade}</Text>
                    <Text style={styles.modalSpecItem}><MaterialIcons name="bolt" size={16} /> Potência: {selectedBetoneira.potencia}</Text>
                    <Text style={styles.modalSpecItem}><MaterialIcons name="attach-money" size={16} /> Preço: {selectedBetoneira.preco}</Text>
                  </View>
                </ScrollView>
                <TouchableOpacity 
                  style={styles.modalCloseButton}
                  onPress={closeDetails}
                >
                  <Text style={styles.modalCloseButtonText}>FECHAR</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Betoneira Redes © 2023</Text>
        <Text style={styles.footerContact}>Contato: (61) 92939-9382</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  cabecalho: {
    backgroundColor: '#2C3E50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerContent: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ECF0F1',
    letterSpacing: 2,
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#BDC3C7',
    marginTop: 5,
    letterSpacing: 1,
  },
  banner: {
    backgroundColor: '#2E86C1',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secao: {
    padding: 20,
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
    letterSpacing: 1,
  },
  subtituloSecao: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 15,
    color: '#34495E',
    lineHeight: 22,
    marginBottom: 20,
  },
  vantagensContainer: {
    marginTop: 10,
  },
  vantagemItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  vantagemText: {
    fontSize: 15,
    color: '#34495E',
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
    backgroundColor: '#F2F3F4',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  nomeBetoneira: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },
  descricaoCard: {
    fontSize: 15,
    color: '#7F8C8D',
    marginBottom: 15,
    lineHeight: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  featurePill: {
    backgroundColor: '#EAEDED',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#2C3E50',
  },
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDED',
    paddingBottom: 15,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  specs: {
    flexDirection: 'row',
  },
  specText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#2E86C1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    backgroundColor: '#2C3E50',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#BDC3C7',
    fontSize: 14,
  },
  footerContact: {
    color: '#BDC3C7',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    elevation: 5,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalScroll: {
    maxHeight: 200,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: '#34495E',
    lineHeight: 24,
    marginBottom: 15,
  },
  modalSpecs: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEDED',
    paddingTop: 10,
  },
  modalSpecItem: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 15,
    fontWeight: '600',
    color: '#2C3E50',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
    backgroundColor: 'white',
    fontSize: 16,
  },
  picker: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 5,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDED',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});