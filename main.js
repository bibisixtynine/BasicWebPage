// main.js

import { Body, Text, HStack, VStack, Spacer, Circle, Image, ZStack, ScrollView } from "./jysuis.js";


const scrollViewContent =
    VStack(
        Text("🌮 Tacoos are life!").fontFamily('Averia Libre'),
        Text("🍕 Pizza is bae!").fontFamily('Averia Libre'),
        Text("🍔 Burgers for the win!").fontFamily('Averia Libre'),
        Text("🍦 Ice cream heaven!").fontFamily('Averia Libre'),
        Text("🥨 Pretzels are twisted!").fontFamily('Averia Libre'),
        Text("🍟 Fries before guys!").fontFamily('Averia Libre'),
        Text("🍩 Donuts are dope!").fontFamily('Averia Libre'),
        Text("🍭 Candy crush!").fontFamily('Averia Libre'),
        Text("🥤 Soda pop party!").fontFamily('Averia Libre'),
        Text("🍪 Cookies make me smile!").fontFamily('Averia Libre'),
        Text("🥤 Sip, sip, hooray!").fontFamily('Averia Libre'),
        Text("🍉 Watermelon wonder!").fontFamily('Averia Libre'),
        Text("🍓 Berrylicious bliss!").fontFamily('Averia Libre'),
        Text("🍰 Sweet as pie!").fontFamily('Averia Libre'),
        Text("🍩 Donuts make my day!").fontFamily('Averia Libre'),
    );


const myScrollViewComponent =
    ScrollView(
        scrollViewContent,
    )

const circlesComponent = 
    HStack(
        Spacer(),
        ZStack(
            Circle()
                .foregroundColor("green")
                .onClick(() => alert('One Clicked')),
            Text("1").fontSize("50px")
                .onClick(() => alert('One Clicked')),

        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("red"),
            Text("2").fontSize("50px"),
        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("blue"),
            Text("3").fontSize("50px"),
        ),
        Spacer(),
    )


Body(
    Spacer(),
    HStack(
        Spacer(),
            Image('theo192.png')
                .width('200px')
                .onClick(() => alert('Image Clicked')),
        Spacer(),
    ),
    Spacer(),
    myScrollViewComponent
        .height('100px'),
    Spacer(),
    Text("My Greeat Web Site")
        .fontSize("50px")
        .fontFamily('Luckiest Guy')
        .foregroundColor("red"),

    Spacer(),
    circlesComponent,
    Spacer(),
    Text("Crafted with 💥😄🎉 and jysuis.js !")
        .fontFamily('Reenie Beanie')
        .fontSize('30px'),
    Spacer()
)







