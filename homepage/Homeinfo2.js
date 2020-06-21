import React from 'react';
import { StyleSheet, Text, View , Image , ScrollView } from 'react-native';

import { material , sanFranciscoWeights , iOSUIKit  , systemWeights , human} from 'react-native-typography'
import styles from '../css/styles.js'
import Imgbar from '../components/imagebar.js'



export default class covidsymptoms extends React.Component {
    static navigationOptions = {
        headerTitle: () =><Imgbar/>,
        headerTitleAlign: 'center',
      }  
      
    render() {
      return (
            <View style={styles.container}>
              <ScrollView >
                <View style={styles.box}>
                <Image resizeMode="contain"
                      source={require('../components/cough.png')}
                      style={styles.icon} 
                      />
                  <View style={styles.recshapetabs} >
                    <Text style={[iOSUIKit.largeTitleEmphasized, styles.defaulttext ,styles.aligntexttabs]}>Symptoms of COVID-19</Text>
                    <Text style={[iOSUIKit.body,styles.marginbox]}>
                     The main symptoms include: 
                      <Text style={[material.subheading]}>
                          Fever,
                          Coughing,
                          Shortness of breath,
                          Trouble breathing,
                          Fatigue,
                          Chills, sometimes with shaking,
                          Body aches,
                          Headache,
                          Sore throat,
                          Loss of smell or taste,
                          Nausea,
                          Diarrhea 
                          {"\n"}
                          (The virus can lead to pneumonia, respiratory failure, 
                          septic shock, and death. Many COVID-19 complications may 
                          be caused by a condition known as cytokine release syndrome or
                          a cytokine storm. This is when an infection triggers your immune system to flood your
                          bloodstream with inflammatory proteins called cytokines. They can kill tissue and damage your organs.)
                          
                          </Text>

                          </Text>
                    <Text style={[human.caption2 , styles.footnote]}>Source: https://www.webmd.com/lung/coronavirus</Text>
                  </View>

                  <View style={styles.adjustment} />
                          
                  <View style={styles.recshapetabs} >
                    <Text style={[iOSUIKit.largeTitleEmphasized , styles.defaulttext , styles.aligntexttabs]}> What to do if you think you have it</Text>
                    <Text style={[iOSUIKit.body , styles.marginbox]}>
                          
                      <Text style={[material.subheading]}>
                      If you live in or have traveled to an area where COVID-19 is spreading:
                      {"\n"}{"\n"}            

                      If you don’t feel well, stay home. Even if you have mild symptoms like a headache
                       and runny nose, stay in until you’re better. This lets doctors focus on people who 
                       are more seriously ill and protects health care workers and people you might meet along 
                       the way. You might hear this called self-quarantine. Try to stay in 
                      a separate room away from other people in your home. Use a separate bathroom if you can.
                      {"\n"}{"\n"}            
                      Call the doctor if you have trouble breathing. 
                      You need to get medical help as soon as possible. 
                      Calling ahead (rather than showing up) will let the doctor direct you to the proper place, 
                      which may not be your doctor’s office. If you don’t have a regular doctor,
                      call your local board of health. They can tell you where to go for testing and treatment.
                      {"\n"} {"\n"}           
                      Follow your doctor’s advice and keep up with the news on COVID-19. 
                      Between your doctor and health care authorities,
                       you’ll get the care you need and information on how to prevent the virus from spreading.

                      </Text>

                      </Text>
                    <Text style={[human.caption2 , styles.footnote]}>Source: https://www.webmd.com/lung/coronavirus</Text>
                  </View>


                  <View style={styles.adjustment} />
                          
                  <View style={styles.recshapetabs} >
                    <Text style={[iOSUIKit.largeTitleEmphasized, styles.defaulttext ,styles.aligntexttabs]}>How long will the coronavirus last?</Text>
                    <Text style={[iOSUIKit.body , styles.marginbox]}>
                          
                      <Text style={[material.subheading]}>
                          
                      It’s too soon to tell how long the pandemic will continue. It depends on many things,
                       including researchers’ work to learn more about the virus, their search for a 
                       treatment and a vaccine, and the public’s efforts to slow the spread.
                       {"\n"}{"\n"}               
                      More than 100 vaccine candidates are in various stages of development and testing. This process usually takes years.
                      Researchers are speeding it up as much as they can, but it still might take 12 to 18 months to find a vaccine that
                      works and is safe.


                      </Text>

                      </Text>
                    <Text style={[human.caption2 , styles.footnote]}>Source: https://www.webmd.com/lung/coronavirus</Text>
                  </View>


                          
                </View> 
              </ScrollView>
            </View>

      );
    }
}
