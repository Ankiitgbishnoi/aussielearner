const questions = {

    learner: [

        {
            category: "SAFE FOLLOWING DISTANCE",

            question:
                "In good driving conditions, what is the minimum safe following distance you should generally allow?",

            answers: [
                "At least one second",
                "At least two seconds",
                "About half a car length",
                "As close as possible to the vehicle ahead"
            ],

            correct: 1,

            explanation:
                "In good conditions, you should keep at least a two-second gap from the vehicle in front. You may need a greater distance in poor conditions."
        },


        {
            category: "TRAFFIC LIGHTS",

            question:
                "A red traffic light is showing as you approach an intersection. What must you do?",

            answers: [
                "Slow down and continue if there is no traffic",
                "Stop before entering the intersection",
                "Enter the intersection slowly",
                "Sound your horn before proceeding"
            ],

            correct: 1,

            explanation:
                "A red traffic light requires you to stop before entering the intersection."
        },


        {
            category: "BLIND SPOTS",

            question:
                "What is the safest way to deal with your vehicle's blind spots?",

            answers: [
                "Adjust your mirrors so you never need to turn your head",
                "Know where the blind spots are and perform appropriate head checks",
                "Only look in the rear-view mirror",
                "Use your horn before changing lanes"
            ],

            correct: 1,

            explanation:
                "Mirrors cannot eliminate all blind spots. You need to know where they are and perform appropriate head checks."
        },


        {
            category: "EMERGENCY VEHICLES",

            question:
                "An emergency vehicle approaches using its warning devices. What should you do?",

            answers: [
                "Ignore it if you have a green traffic light",
                "Take reasonable action to allow the emergency vehicle to pass safely",
                "Accelerate so it cannot catch you",
                "Stop immediately wherever you are"
            ],

            correct: 1,

            explanation:
                "You must respond appropriately to give an approaching emergency vehicle a safe path. A green light does not mean you can ignore an emergency vehicle."
        },


        {
            category: "PEDESTRIANS",

            question:
                "You are approaching a pedestrian crossing and a pedestrian is crossing. What should you do?",

            answers: [
                "Continue because vehicles always have priority",
                "Slow down and give way as required",
                "Sound your horn until the pedestrian moves",
                "Drive around the pedestrian"
            ],

            correct: 1,

            explanation:
                "Drivers must approach pedestrian crossings carefully and give way to pedestrians where required."
        },


        {
            category: "U-TURNS",

            question:
                "When making a U-turn, what is an important requirement?",

            answers: [
                "Give way as required to other road users",
                "Only give way to vehicles travelling behind you",
                "Vehicles approaching from the opposite direction must always stop",
                "You never need to indicate"
            ],

            correct: 0,

            explanation:
                "A driver making a U-turn has give-way responsibilities to other road users. You should also make sure the turn can be completed safely and legally."
        },


        {
            category: "MOBILE PHONES",

            question:
                "Why is using a mobile phone while driving dangerous?",

            answers: [
                "It can distract you from driving and the traffic environment",
                "It improves your reaction time",
                "It makes you more aware of other vehicles",
                "It reduces stopping distance"
            ],

            correct: 0,

            explanation:
                "Mobile-phone use can distract your attention from driving and reduce your ability to respond to hazards."
        },


        {
            category: "WET ROADS",

            question:
                "What should you expect when driving on a wet road?",

            answers: [
                "Your stopping distance can increase",
                "Your stopping distance always decreases",
                "Your tyres automatically have more grip",
                "Weather conditions do not affect braking"
            ],

            correct: 0,

            explanation:
                "Wet conditions can reduce available traction and increase stopping distance, so you should adjust your driving accordingly."
        },


        {
            category: "FATIGUE",

            question:
                "Why is driver fatigue dangerous?",

            answers: [
                "It can reduce alertness and reaction ability",
                "It makes you more observant",
                "It improves concentration",
                "It makes braking faster"
            ],

            correct: 0,

            explanation:
                "Fatigue can reduce alertness, concentration and reaction ability, increasing the risk of a crash."
        },


        {
            category: "OVERTAKING",

            question:
                "A vehicle behind you is trying to overtake. What should you generally do?",

            answers: [
                "Accelerate to prevent it from passing",
                "Move towards the centre of the road",
                "Maintain a steady speed and keep to the left where appropriate",
                "Turn on your hazard lights"
            ],

            correct: 2,

            explanation:
                "You should not accelerate to prevent another vehicle overtaking. Maintain a steady speed and position appropriately."
        }

    ],


    motorcycle: [

        {
            category: "MOTORCYCLE VISIBILITY",

            question:
                "Why should a motorcycle rider actively consider whether other road users can see them?",

            answers: [
                "Motorcycles can be less noticeable than larger vehicles",
                "Motorcycles are always impossible to see",
                "Visibility is only important at night",
                "Other drivers are responsible for seeing motorcycles"
            ],

            correct: 0,

            explanation:
                "Motorcycles can be smaller and less noticeable to other road users. Riders should position themselves and ride in ways that help them be seen."
        },


        {
            category: "INTERSECTIONS",

            question:
                "When approaching an intersection on a motorcycle, what is a safer approach?",

            answers: [
                "Assume every other driver will give way",
                "Approach carefully, scan for hazards and be prepared to respond",
                "Accelerate through the intersection",
                "Look only at the vehicle immediately ahead"
            ],

            correct: 1,

            explanation:
                "Victorian motorcycle guidance emphasises careful intersection approaches, observation and being prepared to stop or take evasive action."
        },


        {
            category: "PROTECTIVE CLOTHING",

            question:
                "What is an important reason for wearing appropriate motorcycle protective equipment?",

            answers: [
                "It can reduce the severity of injuries in a crash",
                "It guarantees that you will not crash",
                "It allows you to exceed the speed limit safely",
                "It replaces the need for safe riding"
            ],

            correct: 0,

            explanation:
                "Appropriate protective equipment can reduce injury severity, but it cannot guarantee that a crash will not occur."
        },


        {
            category: "ROAD SURFACES",

            question:
                "When riding over a potentially slippery surface, what should you generally do?",

            answers: [
                "Use smooth control inputs and adjust your speed appropriately",
                "Accelerate sharply",
                "Brake as hard as possible without assessing the surface",
                "Ignore the surface because motorcycles are unaffected"
            ],

            correct: 0,

            explanation:
                "Smooth control inputs and appropriate speed help you maintain motorcycle stability when traction may be reduced."
        },


        {
            category: "CORNERING",

            question:
                "When approaching an unfamiliar bend on a motorcycle, what should you do?",

            answers: [
                "Enter at a speed that allows you to safely manage the bend",
                "Accelerate hard before the bend",
                "Look only immediately in front of the motorcycle",
                "Assume the road will remain clear"
            ],

            correct: 0,

            explanation:
                "You should approach bends at an appropriate speed and look ahead so you have time to respond to hazards."
        },


        {
            category: "FOLLOWING DISTANCE",

            question:
                "Why is maintaining adequate space from the vehicle ahead important for a motorcycle rider?",

            answers: [
                "It gives you more time and space to respond to hazards",
                "It allows you to stop checking mirrors",
                "It guarantees the vehicle ahead will not brake",
                "It means you never need to use your brakes"
            ],

            correct: 0,

            explanation:
                "Adequate following distance provides additional time and space to respond if traffic changes suddenly."
        },


        {
            category: "LANE POSITION",

            question:
                "Why should a motorcycle rider consider their position within a lane?",

            answers: [
                "It can affect visibility, space and how other road users see them",
                "To prevent every other vehicle from passing",
                "To avoid using indicators",
                "Because motorcycles must always ride in the centre"
            ],

            correct: 0,

            explanation:
                "Lane position can affect your view, available space and visibility to other road users."
        },


        {
            category: "HAZARD PERCEPTION",

            question:
                "You see a vehicle that could potentially turn across your path. What should you do?",

            answers: [
                "Assume the driver will definitely give way",
                "Be prepared to slow, stop or take appropriate evasive action",
                "Accelerate towards the vehicle",
                "Look away from the vehicle"
            ],

            correct: 1,

            explanation:
                "Motorcycle guidance recommends anticipating potential conflicts and being ready to respond rather than assuming another driver will see you or give way."
        },


        {
            category: "WEATHER",

            question:
                "Why should a motorcycle rider adjust their riding in poor weather?",

            answers: [
                "Road grip and visibility can be affected",
                "Motorcycles automatically become safer",
                "Rain increases tyre grip in every situation",
                "Weather has no effect on motorcycle handling"
            ],

            correct: 0,

            explanation:
                "Weather can affect visibility, road surface conditions and available traction."
        },


        {
            category: "OBSERVATION",

            question:
                "What is a useful habit when riding through an intersection?",

            answers: [
                "Scan the intersection and surrounding traffic for possible hazards",
                "Look only at the traffic light",
                "Look only at the road directly underneath the motorcycle",
                "Assume a green light means the intersection is completely safe"
            ],

            correct: 0,

            explanation:
                "Victorian motorcycle guidance recommends observing, anticipating and responding at intersections. A green light does not remove the need to check that it is safe to proceed."
        }

    ]
};

