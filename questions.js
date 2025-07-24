// TOTAL QUESTIONS: 103
const questions = [
    // --- Networks & Basic Electrical (15 Questions) ---
    {
        question: "What is the fundamental relationship described by Ohm's Law?",
        answers: [
            { text: "$P = VI$", correct: false },
            { text: "$I = VR$", correct: false },
            { text: "$V = IR$", correct: true },
            { text: "$V = I/R$", correct: false }
        ]
    },
    {
        question: "Kirchhoff's Current Law (KCL) is based on the conservation of:",
        answers: [
            { text: "Charge", correct: true },
            { text: "Mass", correct: false },
            { text: "Momentum", correct: false },
            { text: "Energy", correct: false }
        ]
    },
    {
        question: "Kirchhoff's Voltage Law (KVL) is based on the conservation of:",
        answers: [
            { text: "Power", correct: false },
            { text: "Energy", correct: true },
            { text: "Mass", correct: false },
            { text: "Charge", correct: false }
        ]
    },
    {
        question: "In a three-pin plug, why is the earth pin thicker and longer than the other two?",
        answers: [
            { text: "To handle higher current than the other pins", correct: false },
            { text: "To prevent it from being inserted into the live or neutral socket", correct: false },
            { text: "Both A and C are correct", correct: true },
            { text: "To ensure the earth connection is made first and broken last", correct: true }
        ]
    },
    {
        question: "What is the unit of electrical power?",
        answers: [
            { text: "Ampere", correct: false },
            { text: "Volt", correct: false },
            { text: "Watt", correct: true },
            { text: "Joule", correct: false }
        ]
    },
    {
        question: "Two resistors, 10Ω and 30Ω, are connected in parallel. What is the equivalent resistance?",
        answers: [
            { text: "40 Ω", correct: false },
            { text: "20 Ω", correct: false },
            { text: "7.5 Ω", correct: true },
            { text: "3.33 Ω", correct: false }
        ]
    },
    {
        question: "The superposition theorem is applicable only to circuits that are:",
        answers: [
            { text: "Unilateral", correct: false },
            { text: "Linear and bilateral", correct: true },
            { text: "Non-linear", correct: false },
            { text: "Containing dependent sources only", correct: false }
        ]
    },
    {
        question: "The efficiency of a power transformer is typically in the range of:",
        answers: [
            { text: "80% - 90%", correct: false },
            { text: "95% - 99%", correct: true },
            { text: "70% - 80%", correct: false },
            { text: "60% - 70%", correct: false }
        ]
    },
    {
        question: "A DC signal is considered which type of signal?",
        answers: [
            { text: "Analog", correct: true },
            { text: "Neither Analog nor Digital", correct: false },
            { text: "Both Analog and Digital", correct: false },
            { text: "Digital", correct: false }
        ]
    },
    {
        question: "What is the form factor of a pure sine wave?",
        answers: [
            { text: "1.414", correct: false },
            { text: "0.707", correct: false },
            { text: "1.11", correct: true },
            { text: "1.0", correct: false }
        ]
    },
    {
        question: "Which of the following materials has a negative temperature coefficient of resistance?",
        answers: [
            { text: "Copper", correct: false },
            { text: "Tungsten", correct: false },
            { text: "Carbon", correct: true },
            { text: "Aluminum", correct: false }
        ]
    },
    {
        question: "An ideal voltage source should have:",
        answers: [
            { text: "Infinite internal resistance", correct: false },
            { text: "A small value of EMF", correct: false },
            { text: "A large value of internal resistance", correct: false },
            { text: "Zero internal resistance", correct: true }
        ]
    },
    {
        question: "An ideal current source should have:",
        answers: [
            { text: "Zero EMF", correct: false },
            { text: "Zero internal resistance", correct: false },
            { text: "A small value of internal resistance", correct: false },
            { text: "Infinite internal resistance", correct: true }
        ]
    },
    {
        question: "Thevenin's theorem replaces a complex network with an equivalent circuit containing:",
        answers: [
            { text: "A voltage source and a series resistor", correct: true },
            { text: "Only a resistor", correct: false },
            { text: "Only a voltage source", correct: false },
            { text: "A current source and a parallel resistor", correct: false }
        ]
    },
    {
        question: "A capacitor stores energy in the form of:",
        answers: [
            { text: "A magnetic field", correct: false },
            { text: "Heat", correct: false },
            { text: "Chemical energy", correct: false },
            { text: "An electric field", correct: true }
        ]
    },

    // --- Electrical Machines (10 Questions) ---
    {
        question: "What is the primary function of a transformer?",
        answers: [
            { text: "To store electrical energy", correct: false },
            { text: "To convert AC to DC", correct: false },
            { text: "To change AC voltage and current levels", correct: true },
            { text: "To change the frequency of AC", correct: false }
        ]
    },
    {
        question: "A standard three-phase induction motor is:",
        answers: [
            { text: "Self-starting", correct: true },
            { text: "Not self-starting", correct: false },
            { text: "A synchronous machine", correct: false },
            { text: "Used for power factor correction only", correct: false }
        ]
    },
    {
        question: "A transformer has 400 turns on the primary and 100 turns on the secondary. If the primary voltage is 240V, what is the secondary voltage?",
        answers: [
            { text: "240 V", correct: false },
            { text: "960 V", correct: false },
            { text: "60 V", correct: true },
            { text: "120 V", correct: false }
        ]
    },
    {
        question: "A 4-pole, 50 Hz, 3-phase induction motor is running at 1440 RPM. What is the percentage slip?",
        answers: [
            { text: "5%", correct: false },
            { text: "3%", correct: false },
            { text: "6%", correct: false },
            { text: "4%", correct: true }
        ]
    },
    {
        question: "Which type of DC motor is generally used for applications requiring high starting torque, such as electric trains?",
        answers: [
            { text: "DC Shunt Motor", correct: false },
            { text: "DC Compound Motor", correct: false },
            { text: "Permanent Magnet DC Motor", correct: false },
            { text: "DC Series Motor", correct: true }
        ]
    },
    {
        question: "The direction of rotation of a DC motor can be reversed by:",
        answers: [
            { text: "Reversing the supply voltage", correct: false },
            { text: "Using a resistor in the armature circuit", correct: false },
            { text: "Reversing either the field current or the armature current", correct: true },
            { text: "Reversing both field and armature currents simultaneously", correct: false }
        ]
    },
    {
        question: "The rotor speed of a synchronous motor is:",
        answers: [
            { text: "Less than the synchronous speed", correct: false },
            { text: "Equal to the synchronous speed", correct: true },
            { text: "Greater than the synchronous speed", correct: false },
            { text: "Independent of the supply frequency", correct: false }
        ]
    },
    {
        question: "What does the acceleration of a rotor in a motor depend on?",
        answers: [
            { text: "The net torque and the moment of inertia", correct: true },
            { text: "Only the applied voltage", correct: false },
            { text: "The ambient temperature", correct: false },
            { text: "Only the rotor resistance", correct: false }
        ]
    },
    {
        question: "The core of a transformer is laminated to reduce:",
        answers: [
            { text: "Eddy current loss", correct: true },
            { text: "Hysteresis loss", correct: false },
            { text: "Copper loss", correct: false },
            { text: "Stray loss", correct: false }
        ]
    },
    {
        question: "Which test is used to determine the core losses in a transformer?",
        answers: [
            { text: "Open-circuit test", correct: true },
            { text: "Short-circuit test", correct: false },
            { text: "Sumpner's test", correct: false },
            { text: "Polarity test", correct: false }
        ]
    },

    // --- Analog & Digital Electronics (20 Questions) ---
    {
        question: "A Zener diode is primarily used as a:",
        answers: [
            { text: "Amplifier", correct: false },
            { text: "Voltage regulator", correct: true },
            { text: "Oscillator", correct: false },
            { text: "Rectifier", correct: false }
        ]
    },
    {
        question: "In an ideal Op-Amp, what is the value of the input impedance and output impedance?",
        answers: [
            { text: "Both are zero", correct: false },
            { text: "Input impedance is infinite, output impedance is zero", correct: true },
            { text: "Input impedance is zero, output impedance is infinite", correct: false },
            { text: "Both are infinite", correct: false }
        ]
    },
    {
        question: "Which device converts AC to pulsating DC?",
        answers: [
            { text: "Inverter", correct: false },
            { text: "Chopper", correct: false },
            { text: "Rectifier", correct: true },
            { text: "Cycloconverter", correct: false }
        ]
    },
    {
        question: "Which of the following is a universal logic gate?",
        answers: [
            { text: "OR", correct: false },
            { text: "XOR", correct: false },
            { text: "NAND", correct: true },
            { text: "AND", correct: false }
        ]
    },
    {
        question: "How can a J-K flip-flop be made to toggle?",
        answers: [
            { text: "By setting J=1, K=0", correct: false },
            { text: "By setting J=0, K=0", correct: false },
            { text: "By setting J=1, K=1", correct: true },
            { text: "By setting J=0, K=1", correct: false }
        ]
    },
    {
        question: "A full-wave bridge rectifier uses how many diodes?",
        answers: [
            { text: "4", correct: true },
            { text: "1", correct: false },
            { text: "8", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "The 'Race-around' condition occurs in which flip-flop?",
        answers: [
            { text: "SR flip-flop", correct: false },
            { text: "T flip-flop", correct: false },
            { text: "Level-triggered JK flip-flop", correct: true },
            { text: "Edge-triggered D flip-flop", correct: false }
        ]
    },
    {
        question: "A Karnaugh map (K-map) is used for:",
        answers: [
            { text: "Analyzing race conditions", correct: false },
            { text: "Minimizing Boolean expressions", correct: true },
            { text: "Calculating the number of flip-flops", correct: false },
            { text: "Designing logic gates", correct: false }
        ]
    },
    {
        question: "Which of the following memories is volatile?",
        answers: [
            { text: "RAM (Random Access Memory)", correct: true },
            { text: "SSD (Solid State Drive)", correct: false },
            { text: "EPROM (Erasable Programmable ROM)", correct: false },
            { text: "ROM (Read-Only Memory)", correct: false }
        ]
    },
    {
        question: "A device that converts a fixed DC voltage into a variable DC voltage is a:",
        answers: [
            { text: "Chopper", correct: true },
            { text: "Converter", correct: false },
            { text: "Inverter", correct: false },
            { text: "Rectifier", correct: false }
        ]
    },
    {
        question: "A transistor has how many P-N junctions?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "2", correct: true },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Which logic family consumes the least power?",
        answers: [
            { text: "RTL", correct: false },
            { text: "CMOS", correct: true },
            { text: "ECL", correct: false },
            { text: "TTL", correct: false }
        ]
    },
    {
        question: "A multiplexer (MUX) is a circuit that has:",
        answers: [
            { text: "One input and many outputs", correct: false },
            { text: "Many inputs and many outputs", correct: false },
            { text: "Many inputs and one output", correct: true },
            { text: "One input and one output", correct: false }
        ]
    },
    {
        question: "A demultiplexer (DEMUX) is a circuit that has:",
        answers: [
            { text: "One input and one output", correct: false },
            { text: "Many inputs and one output", correct: false },
            { text: "Many inputs and many outputs", correct: false },
            { text: "One input and many outputs", correct: true }
        ]
    },
    {
        question: "The process of converting an analog signal to a digital signal is called:",
        answers: [
            { text: "Quantization and Encoding", correct: true },
            { text: "Demodulation", correct: false },
            { text: "Modulation", correct: false },
            { text: "Rectification", correct: false }
        ]
    },
    {
        question: "A half adder can add how many bits?",
        answers: [
            { text: "Four bits", correct: false },
            { text: "Three bits", correct: false },
            { text: "One bit", correct: false },
            { text: "Two bits", correct: true }
        ]
    },
    {
        question: "Which of the following is a four-layer semiconductor device (PNPN)?",
        answers: [
            { text: "MOSFET", correct: false },
            { text: "BJT", correct: false },
            { text: "Diode", correct: false },
            { text: "Thyristor (SCR)", correct: true }
        ]
    },
    {
        question: "The gain of an ideal Op-Amp in an inverting amplifier configuration is given by:",
        answers: [
            { text: "1 - (Rf / Rin)", correct: false },
            { text: "Rin / Rf", correct: false },
            { text: "1 + (Rf / Rin)", correct: false },
            { text: "-Rf / Rin", correct: true }
        ]
    },
    {
        question: "An astable multivibrator has:",
        answers: [
            { text: "One stable state", correct: false },
            { text: "No stable states", correct: true },
            { text: "Two stable states", correct: false },
            { text: "Infinite stable states", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of adding a filter to the output of a rectifier?",
        answers: [
            { text: "To increase the peak voltage", correct: false },
            { text: "To convert DC back to AC", correct: false },
            { text: "To reduce the ripple factor and smooth the DC output", correct: true },
            { text: "To limit the output current", correct: false }
        ]
    },

    // --- Control, Power Systems & Instrumentation (15 Questions) ---
    {
        question: "Which device is designed to protect a circuit from an overcurrent condition?",
        answers: [
            { text: "Isolator", correct: false },
            { text: "Circuit Breaker", correct: true },
            { text: "Current Transformer", correct: false },
            { text: "Busbar", correct: false }
        ]
    },
    {
        question: "In a power system, 'power factor' primarily relates to the ratio of:",
        answers: [
            { text: "Apparent power to real power", correct: false },
            { text: "Reactive power to apparent power", correct: false },
            { text: "Real power to apparent power", correct: true },
            { text: "Reactive power to real power", correct: false }
        ]
    },
    {
        question: "A home air conditioner maintaining a set temperature is an example of a:",
        answers: [
            { text: "Manual control system", correct: false },
            { text: "Adaptive control system", correct: false },
            { text: "Open-loop control system", correct: false },
            { text: "Closed-loop control system", correct: true }
        ]
    },
    {
        question: "What is the primary function of a PLC (Programmable Logic Controller)?",
        answers: [
            { text: "To step down high voltage", correct: false },
            { text: "To automate industrial processes and machinery", correct: true },
            { text: "To provide backup power", correct: false },
            { text: "To measure energy consumption", correct: false }
        ]
    },
    {
        question: "What does SCADA stand for in industrial automation?",
        answers: [
            { text: "System Control and Digital Automation", correct: false },
            { text: "Secure Communication and Device Access", correct: false },
            { text: "Schneider Control and Data Analytics", correct: false },
            { text: "Supervisory Control and Data Acquisition", correct: true }
        ]
    },
    {
        question: "Which of the following is a type of sensor used to measure temperature?",
        answers: [
            { text: "LVDT", correct: false },
            { text: "Strain Gauge", correct: false },
            { text: "Potentiometer", correct: false },
            { text: "Thermocouple", correct: true }
        ]
    },
    {
        question: "In a control system, what does a transfer function relate?",
        answers: [
            { text: "The Laplace transform of the output to the Laplace transform of the input", correct: true },
            { text: "The output to the input in the time domain", correct: false },
            { text: "The frequency of the output to the frequency of the input", correct: false },
            { text: "The steady-state error to the system gain", correct: false }
        ]
    },
    {
        question: "DCS, often used in large industrial processes, stands for:",
        answers: [
            { text: "Direct Control Station", correct: false },
            { text: "Distributed Control System", correct: true },
            { text: "Data Communication System", correct: false },
            { text: "Digital Control System", correct: false }
        ]
    },
    {
        question: "What is the most common type of fault in overhead power lines?",
        answers: [
            { text: "Single line-to-ground fault", correct: true },
            { text: "Line-to-line fault", correct: false },
            { text: "Three-phase symmetrical fault", correct: false },
            { text: "Double line-to-ground fault", correct: false }
        ]
    },
    {
        question: "What is the main advantage of a high transmission voltage?",
        answers: [
            { text: "Reduced power loss (I²R loss)", correct: true },
            { text: "Increased safety", correct: false },
            { text: "Easier to handle", correct: false },
            { text: "Reduced cost of insulation", correct: false }
        ]
    },
    {
        question: "In the 8085 microprocessor, which register is the Program Counter (PC)?",
        answers: [
            { text: "A 16-bit register that points to the next instruction", correct: true },
            { text: "An 8-bit register for arithmetic operations", correct: false },
            { text: "A temporary register for holding data", correct: false },
            { text: "A 16-bit register that points to the top of the stack", correct: false }
        ]
    },
    {
        question: "A PID controller stands for:",
        answers: [
            { text: "Process-Input-Data", correct: false },
            { text: "Power-Impedance-Distribution", correct: false },
            { text: "Proportional-Integral-Derivative", correct: true },
            { text: "Programmable-Industrial-Device", correct: false }
        ]
    },
    {
        question: "Ferranti effect on long transmission lines is experienced when the line is:",
        answers: [
            { text: "Lightly loaded or on no-load", correct: true },
            { text: "Fully loaded", correct: false },
            { text: "Grounded", correct: false },
            { text: "Short-circuited", correct: false }
        ]
    },
    {
        question: "Skin effect in conductors is the tendency of AC current to:",
        answers: [
            { text: "Concentrate at the center of the conductor", correct: false },
            { text: "Distribute uniformly throughout the conductor", correct: false },
            { text: "Flow in a zig-zag path", correct: false },
            { text: "Concentrate near the surface of the conductor", correct: true }
        ]
    },
    {
        question: "Which of the following is a key product area for Schneider Electric's E&A business?",
        answers: [
            { text: "Automobile engines", correct: false },
            { text: "Aircraft turbines", correct: false },
            { text: "Low and medium voltage switchgear", correct: true },
            { text: "Consumer smartphones", correct: false }
        ]
    },
    
    // --- Quantitative Aptitude (20 Questions) ---
    {
        question: "A man gives 20% of his salary to his mother, 50% of the remaining he invests. If he is left with Rs. 2000, what is his salary?",
        answers: [
            { text: "Rs. 6000", correct: false },
            { text: "Rs. 4000", correct: false },
            { text: "Rs. 5000", correct: true },
            { text: "Rs. 10000", correct: false }
        ]
    },
    {
        question: "The ratio of radii of two cylinders is 2:3 and the ratio of their heights is 5:3. The ratio of their volumes is:",
        answers: [
            { text: "20:27", correct: true },
            { text: "10:9", correct: false },
            { text: "4:9", correct: false },
            { text: "27:20", correct: false }
        ]
    },
    {
        question: "A train 100m long is running at a speed of 30 km/hr. Find the time it takes to pass a man standing near the railway line.",
        answers: [
            { text: "15 seconds", correct: false },
            { text: "12 seconds", correct: true },
            { text: "10 seconds", correct: false },
            { text: "18 seconds", correct: false }
        ]
    },
    {
        question: "If the cost price of 20 articles is the same as the selling price of 16 articles, what is the profit percentage?",
        answers: [
            { text: "20%", correct: false },
            { text: "25%", correct: true },
            { text: "16%", correct: false },
            { text: "22.5%", correct: false }
        ]
    },
    {
        question: "A can do a piece of work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:",
        answers: [
            { text: "7/15", correct: false },
            { text: "1/10", correct: false },
            { text: "1/4", correct: false },
            { text: "8/15", correct: true }
        ]
    },
    {
        question: "Simple interest on a certain sum of money for 3 years at 8% per annum is half the compound interest on Rs. 4000 for 2 years at 10% per annum. The sum placed on simple interest is:",
        answers: [
            { text: "Rs. 1550", correct: false },
            { text: "Rs. 1650", correct: false },
            { text: "Rs. 2000", correct: false },
            { text: "Rs. 1750", correct: true }
        ]
    },
    {
        question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
        answers: [
            { text: "1", correct: false },
            { text: "10", correct: false },
            { text: "0", correct: false },
            { text: "19", correct: true }
        ]
    },
    {
        question: "What is 15% of 34?",
        answers: [
            { text: "4.10", correct: false },
            { text: "3.10", correct: false },
            { text: "5.10", correct: true },
            { text: "6.10", correct: false }
        ]
    },
    {
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        answers: [
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
        answers: [
            { text: "5:4", correct: false },
            { text: "6:7", correct: false },
            { text: "3:5", correct:false },
            { text: "4:5", correct: true }
        ]
    },
    {
        question: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
        answers: [
            { text: "Rs. 2500", correct: false },
            { text: "Rs. 1500", correct: false },
            { text: "Rs. 1000", correct: false },
            { text: "Rs. 2000", correct: true }
        ]
    },
    {
        question: "The price of an article is cut by 10%. To restore it to its original value, the new price must be increased by:",
        answers: [
            { text: "10%", correct: false },
            { text: "11 1/9%", correct: true },
            { text: "11%", correct: false },
            { text: "9 1/11%", correct: false }
        ]
    },
    {
        question: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
        answers: [
            { text: "3 hours", correct: false },
            { text: "5 hours", correct: false },
            { text: "7 hours", correct: false },
            { text: "4 hours", correct: true }
        ]
    },
    {
        question: "36 men can complete a piece of work in 18 days. In how many days will 27 men complete the same work?",
        answers: [
            { text: "22", correct: false },
            { text: "24", correct: true },
            { text: "30", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
        answers: [
            { text: "7", correct: false },
            { text: "4", correct: true },
            { text: "13", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "What is the probability of getting a sum of 9 from two throws of a dice?",
        answers: [
            { text: "1/12", correct: false },
            { text: "1/6", correct: false },
            { text: "1/8", correct: false },
            { text: "1/9", correct: true }
        ]
    },
    {
        question: "The salaries of A and B are in the ratio 2:3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40:57. What is B's present salary?",
        answers: [
            { text: "Rs. 17,000", correct: false },
            { text: "Rs. 38,000", correct: false },
            { text: "Rs. 34,000", correct: true },
            { text: "Rs. 40,000", correct: false }
        ]
    },
    {
        question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        answers: [
            { text: "588 apples", correct: false },
            { text: "672 apples", correct: false },
            { text: "700 apples", correct: true },
            { text: "600 apples", correct: false }
        ]
    },
    {
        question: "The angle between the minute hand and the hour hand of a clock when the time is 4.20 is:",
        answers: [
            { text: "10 degrees", correct: true },
            { text: "20 degrees", correct: false },
            { text: "5 degrees", correct: false },
            { text: "0 degrees", correct: false }
        ]
    },
    {
        question: "A is 5 years younger than B. 20 years from now, B's age will be twice A's age 5 years ago. What will be B's age 8 years from now?",
        answers: [
            { text: "35 years", correct: false },
            { text: "48 years", correct: true },
            { text: "52 years", correct: false },
            { text: "40 years", correct: false }
        ]
    },

    // --- Logical Reasoning (23 Questions) ---
    {
        question: "Statement: A > B = C < D. Conclusion I: A > C. Conclusion II: D > B.",
        answers: [
            { text: "Both Conclusion I and II are true", correct: true },
            { text: "Only Conclusion I is true", correct: false },
            { text: "Neither Conclusion I nor II is true", correct: false },
            { text: "Only Conclusion II is true", correct: false }
        ]
    },
    {
        question: "Statement: All pens are books. Some books are chairs. Conclusion I: Some pens are chairs. Conclusion II: Some chairs are books.",
        answers: [
            { text: "Both I and II follow", correct: false },
            { text: "Only Conclusion II follows", correct: true },
            { text: "Neither I nor II follows", correct: false },
            { text: "Only Conclusion I follows", correct: false }
        ]
    },
    {
        question: "Find the odd one out: 3, 5, 11, 14, 17",
        answers: [
            { text: "5", correct: false },
            { text: "17", correct: false },
            { text: "11", correct: false },
            { text: "14", correct: true }
        ]
    },
    {
        question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        answers: [
            { text: "13", correct: false },
            { text: "14", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: true }
        ]
    },
    {
        question: "Which word does NOT belong with the others? (Guitar, Flute, Violin, Cello)",
        answers: [
            { text: "Cello", correct: false },
            { text: "Violin", correct: false },
            { text: "Flute", correct: true },
            { text: "Guitar", correct: false }
        ]
    },
    {
        question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
        answers: [
            { text: "Father", correct: true },
            { text: "Uncle", correct: false },
            { text: "Cousin", correct: false },
            { text: "Brother", correct: false }
        ]

    },
    {
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
        answers: [
            { text: "Brother", correct: false },
            { text: "Nephew", correct: false },
            { text: "Cannot be determined", correct: true },
            { text: "Niece", correct: false }
        ]
    },
    {
        question: "Statement: $S < W = I < T = C < H$. Conclusion I: C > S. Conclusion II: H > W.",
        answers: [
            { text: "Both conclusion I and II are true", correct: true },
            { text: "Only conclusion II is true", correct: false },
            { text: "Neither conclusion I nor II is true", correct: false },
            { text: "Only conclusion I is true", correct: false }
        ]
    },
    {
        question: "Statement: $D < I = A < R = E > S$. Conclusion I: E > D. Conclusion II: I > S.",
        answers: [
            { text: "Only conclusion II is true", correct: false },
            { text: "Both conclusion I and II are true", correct: false },
            { text: "Neither conclusion I nor II is true", correct: false },
            { text: "Only conclusion I is true", correct: true }
        ]
    },
    {
        question: "Statement: $A > N < G = E < L > S$. Conclusion I: A > S. Conclusion II: L > N.",
        answers: [
            { text: "Neither conclusion I nor II is true", correct: false },
            { text: "Only conclusion II is true", correct: true },
            { text: "Both conclusion I and II are true", correct: false },
            { text: "Only conclusion I is true", correct: false }
        ]
    },
    {
        question: "If '1' is subtracted from each even digit and '2' is added to each odd digit in 3824765, how many digits appear more than once?",
        answers: [
            { text: "One", correct: false },
            { text: "None", correct: false },
            { text: "Three", correct: false },
            { text: "Two", correct: true }
        ]
    },
    {
        question: "How many meaningful English words can be made with the letters E, R, D using each letter only once in each word?",
        answers: [
            { text: "Three", correct: false },
            { text: "Two (RED, DRE)", correct: false },
            { text: "One (RED)", correct: true },
            { text: "None", correct: false }
        ]
    },
    {
        question: "In a certain code, 'ROAD' is written as 'URDG'. How is 'SWAN' written in that code?",
        answers: [
            { text: "VZDQ", correct: false },
            { text: "UTDP", correct: false },
            { text: "VXDQ", correct: false },
            { text: "VZDQ", correct: true }
        ]
    },
    {
        question: "Arrange the words in a meaningful order: 1. Police, 2. Punishment, 3. Crime, 4. Judge, 5. Judgment",
        answers: [
            { text: "1, 2, 3, 4, 5", correct: false },
            { text: "3, 1, 4, 5, 2", correct: true },
            { text: "5, 4, 3, 2, 1", correct: false },
            { text: "3, 1, 2, 4, 5", correct: false }
        ]
    },
    {
        question: "Statement: Some actors are singers. All the singers are dancers. Conclusion I: Some actors are dancers. Conclusion II: No singer is an actor.",
        answers: [
            { text: "Only Conclusion I follows", correct: true },
            { text: "Either I or II follows", correct: false },
            { text: "Neither I nor II follows", correct: false },
            { text: "Only Conclusion II follows", correct: false }
        ]
    },
    {
        question: "If South-East becomes North, North-East becomes West and so on. What will West become?",
        answers: [
            { text: "North-West", correct: false },
            { text: "North-East", correct: false },
            { text: "South-East", correct: true },
            { text: "South-West", correct: false }
        ]
    },
    {
        question: "A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
        answers: [
            { text: "North-West", correct: false },
            { text: "South", correct: false },
            { text: "West", correct: false },
            { text: "South-West", correct: true }
        ]
    },
    {
        question: "Find the missing number in the series: 4, 10, ?, 82, 244, 730",
        answers: [
            { text: "26", correct: false },
            { text: "30", correct: false },
            { text: "28", correct: true },
            { text: "24", correct: false }
        ]
    },
    {
        question: "Which one of the following is NOT a leap year? (2000, 1996, 1900, 2004)",
        answers: [
            { text: "1900", correct: true },
            { text: "2000", correct: false },
            { text: "2004", correct: false },
            { text: "1996", correct: false }
        ]
    },
    {
        question: "A, B, C, D, and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E. E is on the left end of the bench. C is on the second position from the right. A is on the right of B and E. A and C are sitting together. In which position is A sitting?",
        answers: [
            { text: "Between C and D", correct: false },
            { text: "Between E and D", correct: false },
            { text: "Between B and D", correct: false },
            { text: "Between B and C", correct: true }
        ]
    },
    {
        question: "BEH is to DGK as FIL is to:",
        answers: [
            { text: "HLP", correct: false },
            { text: "HKN", correct: false },
            { text: "GKN", correct: false },
            { text: "HLO", correct: true }
        ]
    },
    {
        question: "A man is facing north. He turns 90 degrees in the clockwise direction, then another 180 degrees in the same direction and then 90 degrees in the anti-clockwise direction. Which direction is he facing now?",
        answers: [
            { text: "East", correct: false },
            { text: "South", correct: true },
            { text: "West", correct: false },
            { text: "North", correct: false }
        ]
    },
    {
        question: "If in a certain language, 'GLAMOUR' is written as 'IJCNMWP', how will 'ROUTING' be written in that code?",
        answers: [
            { text: "PQWVJMI", correct: false },
            { text: "PQWVJMI", correct: false },
            { text: "PQWVJMI", correct: true },
            { text: "PQWVJPI", correct: false }
        ]
    }
];