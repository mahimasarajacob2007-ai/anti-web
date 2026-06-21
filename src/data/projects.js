const tinkercad = 'https://www.tinkercad.com';

const sensor = [
  ['Ambient Light Sensor', 'ambient sensor', 'ambient-sensor.png', ['Ambient sensor', 'Arduino', 'Resistor']],
  ['Flex Sensor Bend Monitor', 'flex sensor', 'flex-sensor.png', ['Flex sensor', 'Arduino', 'Serial monitor']],
  ['Gas Sensor Alert Node', 'gas sensor', 'gas-sensor.png', ['Gas sensor', 'Arduino', 'Buzzer logic']],
  ['Photoresistor Lux Reader', 'photoresistor', 'photoresistor.png', ['LDR', 'Arduino', 'Resistor']],
  ['PIR Motion Detector', 'pir sensor', 'pir-sensor.png', ['PIR sensor', 'Arduino', 'Digital input']],
  ['Potentiometer Analog Dial', 'potentiometer', 'potentiometer.png', ['Potentiometer', 'Arduino', 'Analog input']],
  ['Temperature Sensor Logger', 'temperature sensor', 'temperature-sensor.png', ['TMP sensor', 'Arduino', 'Serial output']],
  ['Tilt Sensor Orientation Probe', 'tilt sensor', 'tilt-sensor.png', ['Tilt sensor', 'Arduino', 'Digital input']],
  ['Ultrasonic Distance Meter', 'ultrasonic sensor', 'ultrasonic-sensor.png', ['Ultrasonic sensor', 'Arduino', 'Distance math']],
  ['Force Sensor Pressure Study', 'FORCE SENSOR AND LED', 'force-led.png', ['Force sensor', 'Arduino', 'LED feedback']],
];

const actuator = [
  ['Seven Segment Display Driver', '7 segment display (actuator)', 'seven-segment.png', ['Seven segment', 'Arduino', 'Resistors']],
  ['Standard DC Motor Control', 'standard dc motor (actuator)', 'dc-motor.png', ['DC motor', 'Transistor', 'Arduino']],
  ['Hobby Gear Motor Driver', 'hobby gear motor (actuator0', 'hobby-gear-motor.png', ['Gear motor', 'Arduino', 'Power stage']],
  ['LCD 16x2 Status Panel', 'lcd 16x12 (actuator)', 'lcd.png', ['LCD', 'Arduino', 'Display pins']],
  ['LED Output Basics', 'led (actuator)', 'led.png', ['LED', 'Arduino', 'Resistor']],
  ['Micro Servo Positioner', 'micro servo motor (actuator)', 'servo.png', ['Servo motor', 'PWM', 'Arduino']],
  ['NeoPixel Strip Controller', 'neopixel (actuator)', 'neopixel.png', ['NeoPixel', 'Arduino', 'Addressable LED']],
  ['Piezo Buzzer Signal', 'piezo buffer', 'piezo.png', ['Piezo buzzer', 'Arduino', 'Tone output']],
  ['RGB LED Color Mixer', 'rgb led (actuator)', 'rgb-led.png', ['RGB LED', 'PWM', 'Arduino']],
  ['Vibration Motor Haptic Cue', 'vibration motor (actuator)', 'vibration-motor.png', ['Vibration motor', 'Arduino', 'Switching circuit']],
];

const combo = [
  ['Ambient Light Responsive LED', 'AMBIENT LIGHT SENSOR AND LED', 'ambient-led.png', ['Ambient sensor', 'LED', 'Arduino']],
  ['Flex Sensor NeoPixel Ring', 'FLEX SENSOR AND NEOPIXEL', 'flex-neopixel.png', ['Flex sensor', 'NeoPixel', 'Arduino']],
  ['Force Sensor LED Meter', 'FORCE SENSOR AND LED', 'force-led.png', ['Force sensor', 'LED', 'Arduino']],
  ['Gas Alert Piezo System', 'PIEZO BUFFER AND GAS SENSOR', 'piezo-gas.png', ['Gas sensor', 'Piezo', 'Arduino']],
  ['Photoresistor Servo Tracker', 'PHOTORESISTOR AND SERVO MOTOR', 'photo-servo.png', ['Photoresistor', 'Servo', 'Arduino']],
  ['PIR Triggered LED', 'PIR AND LED', 'pir-led.png', ['PIR sensor', 'LED', 'Arduino']],
  ['Potentiometer LCD Interface', 'POTENTIOMETER AND LCD', 'pot-lcd.png', ['Potentiometer', 'LCD', 'Arduino']],
  ['Temperature Driven DC Motor', 'TEMPERATURE SENSOR AND DC MOTOR', 'temp-dc.png', ['Temperature sensor', 'DC motor', 'Arduino']],
  ['Tilt Sensor LED Alert', 'TILT SENSOR AND LED', 'tilt-led.png', ['Tilt sensor', 'LED', 'Arduino']],
  ['Ultrasonic Piezo Proximity Alarm', 'ULTRASONIC SENSOR AND PIEZO BUFFER', 'ultrasonic-piezo.png', ['Ultrasonic sensor', 'Piezo', 'Arduino']],
];

function buildProject(items, category, offset) {
  return items.map(([title, folder, image, components], index) => ({
    id: `${category}-${index}`,
    title,
    folder,
    image: `/project-assets/${image}`,
    circuitImage: `/project-assets/${image}`,
    category,
    description: `${title} uses Tinkercad circuit simulation to connect component behavior with Arduino logic, wiring discipline, and practical IoT prototyping decisions.`,
    components,
    technologies: ['Tinkercad', 'Arduino C++', 'Circuit Simulation'],
    difficulty: index % 3 === 0 ? 'Advanced' : index % 2 === 0 ? 'Intermediate' : 'Foundational',
    status: 'Documented',
    tinkercadUrl: `${tinkercad}/things/new?project=${offset + index}`,
  }));
}

export const projects = [
  ...buildProject(sensor, 'Sensor Projects', 100),
  ...buildProject(actuator, 'Actuator Projects', 200),
  ...buildProject(combo, 'Sensor + Actuator Projects', 300),
];
