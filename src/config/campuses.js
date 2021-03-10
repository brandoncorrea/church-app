const mainCampus = {
    id: 0,
    name: "Main Campus",
    phone: "555-555-5555",
    officeHours: "Mon-Fri 8:00am - 5:00pm",
    address: {
        addressLine1: "123 happy lappy lane",
        addressLine2: null,
        city: "Smallville",
        state: "FL",
        zip: "12345",
    },
    services: [
        {
            day: "Saturday",
            times: ["6:00pm"]
        },
        {
            day: "Sunday",
            times: ["8:00am", "10:30am"]
        },
    ],
};

const campuses = [
    mainCampus
];

export default campuses;