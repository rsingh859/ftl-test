//The format of the JSON object being used. More objects could be added to the members array
{
"ok": true,
"members": [{
"id": "W012A3CDE",
"real_name": "Egon Spengler",
"tz": "America/Los_Angeles",
"activity_periods": [{
"start_time": "Feb 1 2020 1:33PM",
"end_time": "Feb 1 2020 1:54PM"
},
{
"start_time": "Mar 1 2020 11:11AM",
"end_time": "Mar 1 2020 2:00PM"
},
{
"start_time": "Mar 16 2020 5:33PM",
"end_time": "Mar 16 2020 8:02PM"
}
]
},
{
"id": "W07QCRPA4",
"real_name": "Glinda Southgood",
"tz": "Asia/Kolkata",
"activity_periods": [{
"start_time": "Feb 1 2020 1:33PM",
"end_time": "Feb 1 2020 1:54PM"
},
{
"start_time": "Mar 1 2020 11:11AM",
"end_time": "Mar 1 2020 2:00PM"
},
{
"start_time": "Mar 16 2020 5:33PM",
"end_time": "Mar 16 2020 8:02PM"
}
]
}
]
}

//MOCK API server being used : https://037c91d4-06ae-4c9a-b7ee-8f3081759560.mock.pstmn.io/testFTL, link can be changed at UserList Component useEffect hook.

//Using the context API to setup initialState in a reducer file and maintaining DataLayer in the contexts folder

//Using Error-Boundary for handling in-page crashes if any.

//Using a Spinner component to render while data is being fetched from the API.

--For Displaying the User Modal

//Rendering the activity_period for each user in a modal, and using the start_date of the first item of the activity_period array to pass it in the Calendar View ( only extracting the date part )

//Calendar being used - 'react-calendar'

//Using Nested Modals for viewing the Calendar. Using button click to toggle calendar View
