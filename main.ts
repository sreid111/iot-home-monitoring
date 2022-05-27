ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("DODO-6C52", "79ZUTAZ5PT")
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "MFEXWEV1PLANU5UN",
    Environment.ReadLightIntensity(AnalogPin.P2),
    Environment.ReadDust(DigitalPin.P13, AnalogPin.P1),
    Environment.ReadSoilHumidity(AnalogPin.P3),
    Environment.ReadWaterLevel(AnalogPin.P4),
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity)
    )
    ESP8266_IoT.uploadData()
})
