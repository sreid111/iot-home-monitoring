function uploadToThinkSpeak () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "MFEXWEV1PLANU5UN",
    Environment.ReadLightIntensity(AnalogPin.P2),
    Environment.ReadDust(DigitalPin.P13, AnalogPin.P1),
    Environment.ReadSoilHumidity(AnalogPin.P3),
    Environment.ReadWaterLevel(AnalogPin.P10),
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)
    )
    ESP8266_IoT.uploadData()
}
function writeToOLED () {
    OLED.clear()
    OLED.writeString("Light: ")
    OLED.writeNum(Environment.ReadLightIntensity(AnalogPin.P2))
    OLED.newLine()
    OLED.writeString("Dust: ")
    OLED.writeNum(Environment.ReadDust(DigitalPin.P16, AnalogPin.P1))
    OLED.newLine()
    OLED.writeString("Moisture: ")
    OLED.writeNum(Environment.ReadSoilHumidity(AnalogPin.P3))
    OLED.newLine()
    OLED.writeString("Water: ")
    OLED.writeNum(Environment.ReadWaterLevel(AnalogPin.P10))
    OLED.newLine()
    OLED.writeString("Temp: ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.newLine()
    OLED.writeString("Humidity: ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    basic.pause(5000)
}
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("DODO-6C52", "79ZUTAZ5PT")
OLED.init(128, 64)
basic.forever(function () {
    writeToOLED()
    uploadToThinkSpeak()
})
