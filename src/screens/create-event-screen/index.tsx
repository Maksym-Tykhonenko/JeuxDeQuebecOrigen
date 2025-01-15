/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import 'react-native-get-random-values';
import {PrimaryHeader} from '../../components/headers/primary-header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Button} from '../../components/button';
import {DateInput} from '../../components/date-input';
import {styles} from './styles';
import {ACTIVITIES, Activity} from '../../data/activities-list';
import {v4 as uuidv4} from 'uuid';
import {launchImageLibrary} from 'react-native-image-picker';
import {IMAGES} from '../../constants/images';
import {Img} from '../../assets/svg/img';

export const CreateEventScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [occupation, setOccupation] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');
  const [image, setImage] = useState<any>(null);

  const {goBack} = useAppNavigation();

  const handlePress = (value: string) => {
    setSelectedPeople(value);
  };

  const handleImageUpload = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  const handleCreateEvent = () => {
    const newEvent: Activity = {
      id: uuidv4(),
      title: occupation,
      image: image ? image : IMAGES.placeholder,
      button: false,
    };

    ACTIVITIES.push(newEvent);

    console.log('Event created:', newEvent);
    goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <PrimaryHeader title="Create Your Event" onPress={goBack} />
        <View style={{gap: 16}}>
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name Surname"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={{gap: 16}}>
          <Text style={styles.label}>Upload Picture</Text>
          <View
            style={[
              styles.rowInputs,
              {justifyContent: 'space-between', alignItems: 'center'},
              styles.input,
            ]}>
            <Text style={styles.uploadButtonText}>
              {image ? 'Change Picture' : 'Upload Picture'}
            </Text>
            <TouchableOpacity onPress={handleImageUpload}>
              {image ? (
                <Image
                  source={{uri: image.uri}}
                  style={styles.uploadedImage}
                  resizeMode="cover"
                />
              ) : (
                <Img />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowInputs}>
          <DateInput label="Date to come" value={date} onChange={setDate} />
          <View style={{flex: 1, gap: 16}}>
            <Text style={styles.label}>Occupation</Text>
            <TextInput
              style={styles.input}
              placeholder="Occupation"
              value={occupation}
              onChangeText={setOccupation}
            />
          </View>
        </View>

        <View style={{gap: 16}}>
          <Text style={styles.label}>Number Of Person</Text>
          <View style={styles.peopleContainer}>
            {['1-2', '3-4', '5-6', '7-8', '8+'].map(value => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.peopleButton,
                  selectedPeople === value && styles.selectedButton,
                ]}
                onPress={() => handlePress(value)}>
                <Text
                  style={[
                    styles.peopleButtonText,
                    selectedPeople === value && styles.selectedButtonText,
                  ]}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Button onPress={handleCreateEvent} title="Create Now" />
      </ScrollView>
    </SafeAreaView>
  );
};
