
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    id: 1,
    title: 'Consulta General',
    description: 'Atención médica general para diagnóstico y orientación.',
    image: require('@/assets/images/general.jpg'),
  },
  {
    id: 2,
    title: 'Odontología',
    description: 'Servicios dentales integrales.',
    image: require('@/assets/images/dental.jpg'),
  },
  {
    id: 3,
    title: 'Pediatría',
    description: 'Atención especializada para niños.',
    image: require('@/assets/images/pediatrics.jpg'),
  },
];

export default function Services() {
  return (
    <ScrollView className="p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Portafolio de Servicios</Text>
      {services.map(service => (
        <View
          key={service.id}
          className="mb-6 rounded-2xl bg-gray-100 p-4 shadow-md"
        >
          <Image
            source={service.image}
            style={{ width: '100%', height: 200, borderRadius: 12 }}
            resizeMode="cover"
          />
          <Text className="text-xl font-semibold mt-2">{service.title}</Text>
          <Text className="text-base text-gray-600">{service.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
