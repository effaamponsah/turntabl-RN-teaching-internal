import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Caption, Title } from 'react-native-paper';
const SCREEN = Dimensions.get('window')
const pages = [
    {
        backgroundColor: '#fff',
        image: <Image style={{ height: SCREEN.height / 3.8, width: SCREEN.width / 1.8 }} source={require('../../assets/images/undraw_to_do_list_a49b.png')} />,
        title: <Title>Just Name it, we'll get it done</Title>,
        subtitle: <Caption style={{ textAlign: 'center', marginLeft: 10, marginRight: 10 }}>We match you to hundreds of local vetted Professionals to save you time and get your work done</Caption>,
    },
    {
        backgroundColor: '#fff',
        image: <Image style={{ height: SCREEN.height / 3.8, width: SCREEN.width / 1.8 }} source={require('../../assets/images/undraw_invite_i6u7.png')} />,
        title: <Title>We provide the pros, you do the hiring</Title>,
        subtitle: <Caption style={{ textAlign: 'center', marginLeft: 10, marginRight: 10 }}>We do the hardwork! Chillax, compare and book vetted pros for almost anything</Caption>,
    },
    {
        backgroundColor: '#fff',
        image: <Image style={{ height: SCREEN.height / 3.8, width: SCREEN.width / 1.8 }} source={require('../../assets/images/undraw_Savings_dwkw.png')} />,
        title: <Title>Make Money when you want</Title>,
        subtitle: <Caption style={{ textAlign: 'center', marginLeft: 10, marginRight: 10 }}>Be your own boss and get paid for working on what you love and at your own schedle</Caption>,
    },
]

const OnboardScreen = ({ skipped }) => {
    return (
        <Onboarding
            pages={pages}
            onSkip={skipped}
            onDone={skipped}
            controlStatusBar={false}
        />
    );
}

export default OnboardScreen;