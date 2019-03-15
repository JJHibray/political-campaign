const district = [];

const platform = {
    taxes: "",
    jobs:"",
    infrastructure:"",
    healthcare:"",
    crimeEnforcement:""
};

const donations = [];

const eventCalendar = {
    date: "",
    event: ""
};

const volunteerInfo = {
    name:"",
    address:"",
    email:"",
    phoneNumber:"",
    availability:"",
    activities: []
}

const biography = [];

const imageGallery = {
    headShot:"",
    familyPic:"",
    constituentsPic:""
}

const missionStatement = [];

const registration = [];

//____________________________________________________________
// Advanced Challenge

function addDistrict(newDistrict) {
    district.push(newDistrict);
}

//test
/*addDistrict("nashville");
addDistrict("Tennessee")
console.log(district)*/

//It Works!

function addPlatform(pTaxes, pJobs, pInfrastructure, pHealthcare, pCrime) {
    platform.taxes = pTaxes;
    platform.jobs = pJobs;
    platform.infrastructure = pInfrastructure;
    platform.healthcare = pHealthcare;
    platform.crimeEnforcement = pCrime;
}

// addPlatform()
// console.table(platform);

function addDonations(newDonation) {
    donations.push(newDonation);
}

function addCalendar(cDate, cEvent) {
    eventCalendar.date = cDate;
    eventCalendar.event = cEvent
}

function addVolunteer(vName, vAddress, vEmail, vPhone, vAvail) {
    volunteerInfo.name = vName;
    volunteerInfo.address = vAddress;
    volunteerInfo.email = vEmail;
    volunteerInfo.phoneNumber = vPhone;
    volunteerInfo.availability = vAvail
}

function addActivities(activity) {
    volunteerInfo.activities.push(activity);
}

// addActivities("surfing");
// addActivities("basketball");
// console.table(volunteerInfo.activities)

function addBiography(biography) {
    biography.push(biography);
}

function changeImageGallery(photoType, newImage) {
    imageGallery[photoType] = newImage;
};

function addMission(statement) {
    missionStatement.push(statement);
}

function addRegistration(URL) {
    registration.push(url);
}





