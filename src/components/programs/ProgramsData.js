const programs = [
    {
        name: "Pre-Travel Fall 24",
        type: "Intramural",
        season: "Fall",
        ages: "Birth years: 2016, 2017, and 2018",
        dates: "Starts 9/19 and runs every Thursday for 8 weeks",
        time: "5:15 PM - 6:30 PM",
        location: "Stagecoach Elementary School",
        cost: "$150",
        description: "includes a professionally run training session each week.  Columbus Day Tournament.",
        registrationURL: "https://system.gotsport.com/programs/84I502711?reg_role=player"
    },
    {
        name: "Intramural Fall 24",
        type: "Intramural",
        season: "Fall",
        ages: "4 and older",
        dates: "9/15-11/3",
        time: "TBD",
        location: "Stagecoach Elementary School",
        cost: "$150",
        description: "includes a professionally run training session each week",
        registrationURL: "https://system.gotsport.com/programs/6718I7909?reg_role=player"
    },
    {
        name: "Little Kickers Fall 24",
        type: "Little Kickers",
        season: "Fall",
        ages: "2-3",
        dates: "9/15-11/3",
        time: "sunday mornings",
        location: "Stagecoach Elementary School",
        cost: "$75",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/3534K6705?reg_role=player"
    },
    {
        name: "Summer Camp",
        type: "Intramural",
        season: "Summer",
        ages: "4 and older",
        dates: "8/26, 8/27, 8/28, 8/29, 8/30",
        time: "9-12",
        location: "Stagecoach Elementary School",
        cost: "$150",
        description: "The camp will be designed to benefit all skill levels and to help keep our players new and seasoned getting touches on the ball and having fun!!  Each camp will allow ample water breaks as well as a snack break for all of our campers.",
        registrationURL: "https://system.gotsport.com/programs/944L47549?reg_role=player"
    },
    {
        name: "Intramural Spring Skills Clinic",
        type: "Spring Skills Clinic",
        season: "Spring",
        ages: "4 and older",
        dates: "4/18, 4/25, 5/2, 5/9, 5/25, 6/6",
        time: "5-6 PM",
        location: "Stagecoach Elementary School",
        cost: "$100",
        description: "A 6 week program to work on both basic and advance skills under the guidance of a professional trainer. The trainer will encourage proper technique while also teaching new skills and soccer awareness on the field.",
        registrationURL: "https://mandrillapp.com/track/click/30911866/system.gotsport.com?p=eyJzIjoidDVqcW5EVWVSVFljR1dEcG1pdS00MjZzZmdBIiwidiI6MSwicCI6IntcInVcIjozMDkxMTg2NixcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3N5c3RlbS5nb3RzcG9ydC5jb21cXFwvcHJvZ3JhbXNcXFwvNjNFMjIxMzQzP3JlZ19yb2xlPXBsYXllclwiLFwiaWRcIjpcIjA3ZTcwOWIzZGM3NjRlODg5YTg4MTUyYWRjYjJjOGJlXCIsXCJ1cmxfaWRzXCI6W1wiNDFhNDcyODc3ZmE2MTdhNTY5ZWY5NjU1YzliMjMxMWIyMGFkYjVjMVwiXX0ifQ"
    },
    {
        name: "Intramural Spring 24",
        type: "Intramural",
        season: "Spring",
        ages: "4 and older",
        dates: "4/1/24 - 6/20/24",
        time: "n/a",
        location: "Stagecoach Elementary School",
        cost: "n/a",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/603E90410?reg_role=player"
    },
    {
        name: "Little Kickers Spring 24",
        type: "Little Kickers",
        season: "Spring",
        ages: "2-3",
        dates: "4/1/24 - 6/20/24",
        time: "n/a",
        location: "Stagecoach Elementary School",
        cost: "n/a",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/30H142438?reg_role=player"
    },
    {
        name: "Intramural Winter Clinic Indoor Session 1 & 2",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4, 2/11, 2/18, 2/25, 3/3, 3/10",
        time: "9:00 AM - 10:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$175",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/9135077V2?reg_role=player"
    },
    {
        name: "Intramural Winter Clinic Indoor Session 1",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4",
        time: "9:00 AM - 10:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$100",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/8F8801320?reg_role=player"
    },
    {
        name: "Intramural Winter Clinic Indoor Session 2",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "2/11, 2/18, 2/25, 3/3, 3/10",
        time: "9:00 AM - 10:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$100",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/1Q7113363?reg_role=player"
    },
    {
        name: "Intramural Winter Outdoor Clinic Session 1 & 2",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4, 2/11, 2/18, 2/25, 3/3, 3/10",
        time: "11:00 AM - 12:00 PM",
        location: "Stagecoach Elementary School",
        cost: "$175",
        description: "Please note, this program will be contingent upon weather",
        registrationURL: "https://system.gotsport.com/programs/8278Z9433?reg_role=player"
    },
    {
        name: "Intramural Winter Outdoor Clinic Session 1",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4",
        time: "11:00 AM - 12:00 PM",
        location: "Stagecoach Elementary School",
        cost: "$175",
        description: "Please note, this program will be contingent upon weather",
        registrationURL: "https://system.gotsport.com/programs/3884B5344?reg_role=player"
    },
    {
        name: "Intramural Winter Outdoor Clinic Session 2",
        type: "Intramural",
        season: "Winter",
        ages: "4 years and older",
        dates: "2/11, 2/18, 2/25, 3/3, 3/10",
        time: "11:00 AM - 12:00 PM",
        location: "Stagecoach Elementary School",
        cost: "$175",
        description: "Please note, this program will be contingent upon weather",
        registrationURL: "https://system.gotsport.com/programs/1542M9070?reg_role=player"
    },
    {
        name: "Little Kickers Winter Indoor Clinic Session 1 & 2",
        type: "Little Kickers",
        season: "Winter",
        ages: "2-3",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4, 2/11, 2/18, 2/25, 3/3, 3/10",
        time: "10:00 AM - 11:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$175",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/7702174J9?reg_role=player"
    },
    {
        name: "Little Kickers Winter Indoor Clinic Session 1",
        type: "Little Kickers",
        season: "Winter",
        ages: "2-3",
        dates: "1/7, 1/14, 1/21, 1/28, 2/4",
        time: "10:00 AM - 11:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$100",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/R30757617?reg_role=player"
    },
    {
        name: "Little Kickers Winter Indoor Clinic Session 2",
        type: "Little Kickers",
        season: "Winter",
        ages: "2-3",
        dates: "2/11, 2/18, 2/25, 3/3, 3/10",
        time: "10:00 AM - 11:00 AM",
        location: "Camp New for Kids - 921 Lincoln Ave, Holbrook NY.",
        cost: "$100",
        description: "n/a",
        registrationURL: "https://system.gotsport.com/programs/93N007077?reg_role=player"
    }
    
]

export default programs;



