var TechnicalSpecification={
    Dimensions:{
        overallLength_mm:3500,
        overallWidth_mm:1600,
        overallHeigth_mm:1490,
        wheelBase_mm:1360,
        trackWidth:{
            front_mm:1405,
            rear_mm:1400
        },
        minimumTumingRadius_m:4.5,
        minimumGroundClearance_mm:170
    },
    capacities:{
        seatCapacities_persons:5,
        FuileTankCapacities_l:35
    },
    engine:{
        type:"KB-Series",
        numberOfCylinders:3,
        numberOfValues:12,
        capacity_ccPercm3:998,
        bareXStrocke_mm:73.0*79.5,
        compersionRatio:"10:1",
        maximumPower_PSPerrpm:"67/6200",
        maximumTorque_NmPerrpm:"90/3500",
        fuelDistbutaion:"Multipoint Injection"
    },
    transmission:{
        type:"5-speed MT"
    },
    chassis:{
        steering:"rack&pinck, power assisted",
        breaks:{
            front:"ventilate dises",
            rear:"Drums"
        },
        suspension:{
            front:"MacPherson strut & coil spring",
            rear:"Isptated traling link & coil spring"
        },
        shockAbsorbers:"Gas filled",
        trie_tubeless:"155/80R13"
    },
    weigths:{
        kebWeigth_kg:"860-880",
        grossVehicleWeigth:1320
    }
}