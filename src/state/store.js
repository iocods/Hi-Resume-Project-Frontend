import {createStore, action, thunk, computed, useStoreStates, useStoreActions} from 'easy-peasy';

export default createStore({
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dob: '',
        tel: ''
    },

    setUser: action((state, payload) => {
        state.user = payload;
    }),

    userLogin: {
        username: '',
        password: '',
        authorized:'false'
    },
    setUserLogin: action((state, payload) => {
        state.userLogin = payload;
    }),
    userHeader: {
        Authorization: ''
    },
    setUserHeader: action((state, payload) => {
        state.userHeader = payload;
    }),
    address: {
        suiteNumber: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    },
    setAddress: action((state, payload) => {
        state.address = payload;
    }),
    type: 'RESUME',
    setType: action((state, payload) => state.type = payload),
    open: false,
    setOpen: action((state, payload) => {
        state.open = payload;
    }),
    title: '',
    setTitle: action((state, payload) => state.title = payload),
    newProfile: {
        title: '',
        language: [],
        skills: []
    },
    setNewProfile: action((state, payload) => {
        state.newProfile = payload;
    }),
    logout: false,
    setLogout: action((state, payload) => state.logout = payload), 
    workHistory: {
        companyName: '',
        startDate: '',
        endDate: '',
        role: '',
        roleDescription: ''
    },
    setWorkHistory: action((state, payload) => state.workHistory = payload),
    // newEducationDetails: {
    //     startDate: 'Enter Start Year',
    //     endDate: '',
    //     nameOfSchool: '',
    //     courseOfStudy: '',
    //     degreeType: ''
    // },
    // setNewEducationDetails: action((state, payload) => state.newEducationDetails = payload),
    education: [],
    setEducation: action((state, payload) => state.education = payload),
    personalDetails: {},
    setPersonalDetails: action((state, payload) => state.personalDetails = payload),
    skills: [],
    setSkills: action((state, payload) => state.skills = payload),
    reference: {
        referenceName: '',
        referencerRole: ''
    },
    setReference: action((state, payload) => state.reference = payload)
})