
const where_you = document.querySelector('#where_you');
const sound = new Audio('Iphone Notification Sound Effect.mp3')
const soundTwo = new Audio("smartphone_vibrating_alarm_silent-7040.mp3");
const what_is_file_name = document.getElementById('what_is_file_name');
const value_showing_for_everythings = document.getElementById('value_showing_for_everythings');
console.log(what_is_file_name);
const WynkMusickForShowingrealValues = document.querySelector(".WynkMusickForShowingrealValues");


// This is home page of javascript
const file_click = document.querySelectorAll('.file_click')
const mid = document.querySelector('.mid')
let Location = "THIS IS HOME";
where_you.innerHTML = Location;
const fileInObjectForm = {
    ThisIsFileElement_1: file_click[0],
    ThisIsNameElement_1: file_click[1],

    ThisIsFileElement_2: file_click[2],
    ThisIsNameElement_2: file_click[3],

    ThisIsFileElement_3: file_click[4],
    ThisIsNameElement_3: file_click[5],

    ThisIsFileElement_4: file_click[6],
    ThisIsNameElement_4: file_click[7],

    ThisIsFileElement_5: file_click[8],
    ThisIsNameElement_5: file_click[9],

    ThisIsFileElement_6: file_click[10],
    ThisIsNameElement_6: file_click[11],
}

fileInObjectForm.ThisIsFileElement_1.addEventListener('dblclick', () => {
    alert('This is file 0 ')

    where_you.innerText = "Your File Name Is " + fileInObjectForm.ThisIsNameElement_1.textContent;



})
fileInObjectForm.ThisIsNameElement_1.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_1.innerHTML = NameChange_1;

    whereYou();
})

fileInObjectForm.ThisIsFileElement_2.addEventListener('dblclick', () => {
    alert('it is one file of page')
})
fileInObjectForm.ThisIsNameElement_2.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_2.innerHTML = NameChange_1;

})

fileInObjectForm.ThisIsFileElement_3.addEventListener('dblclick', () => {
    alert('it is two file of page')
})
fileInObjectForm.ThisIsNameElement_3.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_3.innerHTML = NameChange_1;

})

fileInObjectForm.ThisIsFileElement_4.addEventListener('dblclick', () => {
    alert('it is three file of page')
})
fileInObjectForm.ThisIsNameElement_4.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_4.innerHTML = NameChange_1;

})

fileInObjectForm.ThisIsFileElement_5.addEventListener('dblclick', () => {
    alert('it is four file of page')
})
fileInObjectForm.ThisIsNameElement_5.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_5.innerHTML = NameChange_1;

})

fileInObjectForm.ThisIsFileElement_6.addEventListener('dblclick', () => {
    alert('it is five file of page')
})
fileInObjectForm.ThisIsNameElement_6.addEventListener('dblclick', () => {
    let NameChange_1 = prompt('Now you Rename Youe file')
    fileInObjectForm.ThisIsNameElement_6.innerHTML = NameChange_1;

})





//  This is bottom button to controls for all page
const phone_continer = document.getElementById('phone_continer');
const topFoe = document.getElementById('top');
const bottom = document.getElementById('bottom');
const left_btn = document.getElementById("left_btn")
const mid_btn = document.getElementById("mid_btn")
const right_btn = document.getElementById("right_btn")



left_btn.addEventListener('click', () => {
    left_btn.style.color = 'red';

    setTimeout(() => {
        left_btn.style.color = 'white';


    }, 100);
})

mid_btn.addEventListener('click', () => {
    mid_btn.style.color = 'red';
    setTimeout(() => {
        mid_btn.style.color = 'white';
    }, 100);
})

right_btn.addEventListener('click', () => {
    value_showing_for_everythings.style.display = 'none'
    where_you.innerHTML = Location;
    mid.style.display = 'flex';
    right_btn.style.color = 'red';
    setTimeout(() => {
        right_btn.style.color = 'white';
    }, 100);
})





const setting = document.querySelectorAll('#setting');
let settingIntheformofobejcts = {
    photo: setting[0],
    books: setting[1],
    setting: setting[2]
}

function Settingsfunction() {
    const HeaderName = document.querySelector('#HeaderName');
    const books_container = document.querySelector('.books_container');
    const photo_container = document.querySelector('.photo_container');
    const setting_elements = document.querySelector('.setting_elements');
    const zoomphotogallery = document.querySelector('.zoomphotogallery');
    let settingname = "You Are in The setting";
    mid.style.display = 'none';
    HeaderName.innerText = "Setting"
    HeaderName.style.display = "block"
    where_you.innerHTML = settingname;
    books_container.style.display = 'none';
    photo_container.style.display = 'none';
    zoomphotogallery.style.display = 'none'
    WynkMusickForShowingrealValues.style.display = "none"
    setting_elements.style.display = 'flex';
    value_showing_for_everythings.style.display = 'flex';
}

settingIntheformofobejcts.setting.addEventListener('dblclick', () => {
    Settingsfunction()
    console.log(Settingsfunction())



})


function BooksStroe() {
    const HeaderName = document.querySelector('#HeaderName');
    const books_container = document.querySelector('.books_container');
    const photo_container = document.querySelector('.photo_container');
    const setting_elements = document.querySelector('.setting_elements');
    const zoomphotogallery = document.querySelector('.zoomphotogallery');

    let booksFileName = "You Are in The Books Shop"
    HeaderName.style.display = "block"
    mid.style.display = 'none';
    HeaderName.innerText = "Books"
    where_you.innerHTML = booksFileName;
    books_container.style.display = 'flex';
    setting_elements.style.display = 'none';
    photo_container.style.display = 'none';
    zoomphotogallery.style.display = 'none'
    WynkMusickForShowingrealValues.style.display = "none"
    value_showing_for_everythings.style.display = 'flex';


}
settingIntheformofobejcts.books.addEventListener('dblclick', () => {
    BooksStroe()
    console.log(BooksStroe())

})
function PhotoContainer() {
    const HeaderName = document.querySelector('#HeaderName');
    const books_container = document.querySelector('.books_container');
    const photo_container = document.querySelector('.photo_container');
    const setting_elements = document.querySelector('.setting_elements');
    const zoomphotogallery = document.querySelector('.zoomphotogallery');

    let photoName = "You are in The gallery";
    HeaderName.style.display = "block"

    where_you.innerHTML = photoName;
    HeaderName.innerHTML = "Photos";
    mid.style.display = 'none';
    books_container.style.display = 'none';
    setting_elements.style.display = 'none';
    zoomphotogallery.style.display = 'none'
    WynkMusickForShowingrealValues.style.display = "none"
    photo_container.style.display = 'flex';
    value_showing_for_everythings.style.display = 'flex';

}
settingIntheformofobejcts.photo.addEventListener('dblclick', () => {
    PhotoContainer()
    console.log(PhotoContainer())

})


const setPersonalThings = document.querySelectorAll('#setPersonalThings');
let setPersonalSetting = {
    backgroundColorBlackToWhite: setPersonalThings[0],
    ActiveNotification: setPersonalThings[1],
    soundVibrationMode: setPersonalThings[2],
    backgroundColorBlackToWhite_coming: setPersonalThings[3],
    phoneScreenLock: setPersonalThings[4],
    phoneOf: setPersonalThings[5],
    backgroundColorBlackToWhite_coming: setPersonalThings[6],
    backgroundColorBlackToWhite_coming: setPersonalThings[7],
    backgroundColorBlackToWhite_coming: setPersonalThings[8],
    backgroundColorBlackToWhite_coming: setPersonalThings[9],
    backgroundColorBlackToWhite_coming: setPersonalThings[10],

}
// This is backgroud cahanger setting 
let currentMode = "black";
setPersonalSetting.backgroundColorBlackToWhite.addEventListener('click', () => {

    if (currentMode == "black") {
        mid.style.backgroundColor = 'white'
        mid.style.color = 'black';
        value_showing_for_everythings.style.background = 'white'
        currentMode = "white";
    } else {
        mid.style.backgroundColor = 'black'
        mid.style.color = 'white';
        value_showing_for_everythings.style.background = 'black'

        currentMode = "black";
    }
    console.log(currentMode)

})


// This is ActiveNotification of setting
const notification_container = document.querySelector('.notification_container')
const notification_container_off = document.querySelector('.notification_container_off')
const onNotification = document.querySelector('#onNotification');
let notificationOff = "NO";

setPersonalSetting.ActiveNotification.addEventListener('click', () => {
    if (notificationOff == "NO") {
        notification_container.style.display = 'flex';
        notification_container_off.style.display = 'none';
        notificationOff = "OFF";

    } else {
        notification_container.style.display = 'none';
        notification_container_off.style.display = 'flex';
        notificationOff = "NO";
    }

    setTimeout(() => {
        notification_container.style.display = 'none';
        notification_container_off.style.display = 'none';

    }, 5000);
})


// This is soundVibrationMode  setting javascript 
let modeSound = "vibration";
setPersonalSetting.soundVibrationMode.addEventListener('click', () => {
    if (modeSound == "vibration") {
        modeSound = "sound";
        sound.play();

    }
    else {
        soundTwo.play();
        setTimeout(() => {
            soundTwo.pause();
        }, 2000);
        modeSound = "vibration";

    }

    console.log(modeSound)
})




let ScreenActivityOrNot = "NOT";
// This is setting for ScreenTimerLcok  
setPersonalSetting.phoneScreenLock.addEventListener('click', () => {
    console.log('This is screen timer working')
    if (ScreenActivityOrNot == "NOT") {
        const screeTimeLoock = document.getElementById('screeTimeLoock');
        let time = screeTimeLoock.value;
        phone_continer.addEventListener('mouseover', () => {
            bottom.style.opacity = '1'
            topFoe.style.opacity = '1'

        })
        setInterval(() => {
            bottom.style.opacity = '0'
            bottom.style.transitionDuration = '0.50s'
            topFoe.style.transitionDuration = '0.50s'
            topFoe.style.opacity = '0'
        }, time);
        ScreenActivityOrNot = "YES";

    }
    else {
        const screeTimeLoock = document.getElementById('screeTimeLoock');
        // let time = screeTimeLoock.value;
        phone_continer.addEventListener('mouseover', () => {
            bottom.style.opacity = '1'
            topFoe.style.opacity = '1'

        })
        setInterval(() => {
            bottom.style.opacity = '1'
            bottom.style.transitionDuration = '0.50s'
            topFoe.style.transitionDuration = '0.50s'
            topFoe.style.opacity = '1'
        }, 0);
        ScreenActivityOrNot = "NOT";
    }
    console.log(ScreenActivityOrNot)
})


// This is photo of javascript and to programing
const imagesinOjects = document.querySelectorAll('.imagesinOjects');

const photo_container = document.querySelector('.photo_container');
const zoomphotogallery = document.querySelector('.zoomphotogallery');
const imagesinterface = document.getElementById('imagesinterface');
const imageBacks = document.querySelector('.imageBack');
const imageNexts = document.querySelector('.imageNext');
// let imagesinOjectsAdd = {
//     images_0: imagesinOjects[0],
//     images_1: imagesinOjects[1],
//     images_2: imagesinOjects[2],
//     images_3: imagesinOjects[3],
//     images_4: imagesinOjects[4],
//     images_5: imagesinOjects[5],
//     images_6: imagesinOjects[6],
//     images_7: imagesinOjects[7],
//     images_8: imagesinOjects[8],
//     images_9: imagesinOjects[9],
//     images_10: imagesinOjects[10],
//     images_11: imagesinOjects[11],
const deleteImage = document.querySelector('.delete');

// }
imagesinOjects.forEach(image => {
    image.addEventListener('click', (e) => {
        // HeaderName

        HeaderName.innerHTML = "←";
        HeaderName.style.color = "white"
        photo_container.style.display = 'none';
        zoomphotogallery.style.display = 'flex';
        imagesinterface.src = image.src
    })
    HeaderName.addEventListener('click', () => {
        photo_container.style.display = 'flex';
        zoomphotogallery.style.display = 'none';
    })
    HeaderName.style.cursor = "pointer"


});

// imagesinOjectsAdd.images_0.addEventListener('click', () => {

//     imagesinterface.src = imagesinOjectsAdd["images_0"].src;
// })
// imagesinOjectsAdd.images_1.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_1"].src;

// })
// imagesinOjectsAdd.images_2.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_2"].src;

// })
// imagesinOjectsAdd.images_3.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_2"].src;

// })
// imagesinOjectsAdd.images_4.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_4"].src;

// })
// imagesinOjectsAdd.images_5.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_5"].src;

// })
// imagesinOjectsAdd.images_6.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_6"].src;

// })
// imagesinOjectsAdd.images_7.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_7"].src;

// })
// imagesinOjectsAdd.images_8.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_8"].src;

// })
// imagesinOjectsAdd.images_9.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_9"].src;

// })
// imagesinOjectsAdd.images_10.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_10"].src;

// })
// imagesinOjectsAdd.images_11.addEventListener('click', () => {
//     imagesinterface.src = imagesinOjectsAdd["images_11"].src;

// })

// This is images control when images in zooming 

const star = document.querySelector('.star');
const imageBack = document.querySelector('.imageBack');
const imageNext = document.querySelector('.imageNext');
let straNo = "true";
star.addEventListener('click', () => {
    if (straNo == "true") {
        straNo = "false";
        star.style.color = "black";
        star.style.backgroundColor = "yellow"

    } else {
        straNo = "true";
        star.style.color = "white"
        star.style.backgroundColor = ""

    }
    console.log(straNo)
})


deleteImage.addEventListener('click', () => {
    alert("This is working now tahn for theingg becuse i want to share some perosnla tinsg ")
})






const WynkMusicOfTellingThePhone = () => {
    const HeaderName = document.querySelector('#HeaderName');
    const books_container = document.querySelector('.books_container');
    const photo_container = document.querySelector('.photo_container');
    const setting_elements = document.querySelector('.setting_elements');
    const zoomphotogallery = document.querySelector('.zoomphotogallery');

    let booksFileName = "You Are in The Wynk Music"
    mid.style.display = 'none';
    HeaderName.innerText = "Wynk Music"
    HeaderName.style.display = "none"
    where_you.innerHTML = booksFileName;
    books_container.style.display = 'none';
    setting_elements.style.display = 'none';
    photo_container.style.display = 'none';
    zoomphotogallery.style.display = 'none'
    WynkMusickForShowingrealValues.style.display = "flex"
    value_showing_for_everythings.style.display = 'flex';

}
const WynkMusic = document.getElementById("WynkMusic");
WynkMusic.addEventListener("click" , () => {
    WynkMusicOfTellingThePhone()
})