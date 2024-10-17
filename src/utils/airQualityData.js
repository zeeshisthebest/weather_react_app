function calculateAQI(pollutant, concentration) {
    // Define the breakpoints for each pollutant
    const breakpoints = {
        "pm2_5": [
            { C_lo: 0.0, C_hi: 12.0, I_lo: 0, I_hi: 50 },
            { C_lo: 12.1, C_hi: 35.4, I_lo: 51, I_hi: 100 },
            { C_lo: 35.5, C_hi: 55.4, I_lo: 101, I_hi: 150 },
            { C_lo: 55.5, C_hi: 150.4, I_lo: 151, I_hi: 200 },
            { C_lo: 150.5, C_hi: 250.4, I_lo: 201, I_hi: 300 },
            { C_lo: 250.5, C_hi: 500.0, I_lo: 301, I_hi: 500 }
        ],
        "pm10": [
            { C_lo: 0, C_hi: 54, I_lo: 0, I_hi: 50 },
            { C_lo: 55, C_hi: 154, I_lo: 51, I_hi: 100 },
            { C_lo: 155, C_hi: 254, I_lo: 101, I_hi: 150 },
            { C_lo: 255, C_hi: 354, I_lo: 151, I_hi: 200 },
            { C_lo: 355, C_hi: 424, I_lo: 201, I_hi: 300 },
            { C_lo: 425, C_hi: 604, I_lo: 301, I_hi: 500 }
        ],
        "so2": [
            { C_lo: 0, C_hi: 35, I_lo: 0, I_hi: 50 },
            { C_lo: 36, C_hi: 75, I_lo: 51, I_hi: 100 },
            { C_lo: 76, C_hi: 185, I_lo: 101, I_hi: 150 },
            { C_lo: 186, C_hi: 304, I_lo: 151, I_hi: 200 },
            { C_lo: 305, C_hi: 604, I_lo: 201, I_hi: 300 }
        ],
        "no2": [
            { C_lo: 0, C_hi: 53, I_lo: 0, I_hi: 50 },
            { C_lo: 54, C_hi: 100, I_lo: 51, I_hi: 100 },
            { C_lo: 101, C_hi: 360, I_lo: 101, I_hi: 150 },
            { C_lo: 361, C_hi: 649, I_lo: 151, I_hi: 200 },
            { C_lo: 650, C_hi: 1249, I_lo: 201, I_hi: 300 }
        ],
        "co": [
            { C_lo: 0.0, C_hi: 4.4 * 1145, I_lo: 0, I_hi: 50 },
            { C_lo: 4.5 * 1145, C_hi: 9.4 * 1145, I_lo: 51, I_hi: 100 },
            { C_lo: 9.5 * 1145, C_hi: 12.4 * 1145, I_lo: 101, I_hi: 150 },
            { C_lo: 12.5 * 1145, C_hi: 15.4 * 1145, I_lo: 151, I_hi: 200 }
        ],
        "o3": [
            { C_lo: 0, C_hi: 54 * 2, I_lo: 0, I_hi: 50 },
            { C_lo: 55 * 2, C_hi: 70 * 2, I_lo: 51, I_hi: 100 },
            { C_lo: 71 * 2, C_hi: 85 * 2, I_lo: 101, I_hi: 150 },
            { C_lo: 86 * 2, C_hi: 105 * 2, I_lo: 151, I_hi: 200 },
            { C_lo: 106 * 2, C_hi: 200 * 2, I_lo: 201, I_hi: 300 }
        ]
    };

    const bp = breakpoints[pollutant];

    // Find the correct range in breakpoints for the given concentration
    for (let i = 0; i < bp.length; i++) {
        if (concentration >= bp[i].C_lo && concentration <= bp[i].C_hi) {
            // Apply the linear interpolation formula
            const AQI = ((bp[i].I_hi - bp[i].I_lo) / (bp[i].C_hi - bp[i].C_lo)) * (concentration - bp[i].C_lo) + bp[i].I_lo;
            return Math.round(AQI);  // Return the AQI value rounded to nearest integer
        }
    }

    // If the concentration is out of range
    return "0";
}


/**
 *
 * @param {Object} airQualityData object containin data of each pollutant
 *
 * @returns The AQI based on the max among the given pollutants
 */
export function getAQI(airQualityData){
    let co = calculateAQI('co', airQualityData['co']);
    let no2 = calculateAQI('no2', airQualityData['no2']);
    let o3 = calculateAQI('o3', airQualityData['o3']);
    let so2 = calculateAQI('so2', airQualityData['so2']);
    let pm2_5 = calculateAQI('pm2_5', airQualityData['pm2_5']);
    let pm10 = calculateAQI('pm10', airQualityData['pm10']);
    return Math.max(co, no2, o3, so2, pm2_5, pm10);
}
