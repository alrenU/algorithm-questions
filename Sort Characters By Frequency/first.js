var frequencySort = function (s) {
    let letterCountArr = [];
    let l_letterIndexNum = null;

    for (let i = 0; i < s.length; i++) {
        let l_letterIndexNum = letterCountArr.findIndex(item => item.hasOwnProperty(`${s[i]}`));

        if (l_letterIndexNum === -1) {
            letterCountArr.push({ [s[i]]: 1 });
        } else {
            letterCountArr[l_letterIndexNum][s[i]]++;
        }
    }

    let tmp_letterCountArr = [letterCountArr[0]];

    for (let i = 1; i < letterCountArr.length; i++) {
        let inserted = false;

        for (let j = 0; j < tmp_letterCountArr.length; j++) {
            if (Object.values(letterCountArr[i])[0] > Object.values(tmp_letterCountArr[j])[0]) {
                tmp_letterCountArr.splice(j, 0, letterCountArr[i]);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            tmp_letterCountArr.push(letterCountArr[i]);
        }
    }

    letterCountArr = tmp_letterCountArr;
    let totalCount = null;
    let concatenatedString = "";

    for (let i = 0; i < letterCountArr.length; i++) {
        for (let j = 0; j < Object.values(letterCountArr[i])[0]; j++) {
            concatenatedString += Object.keys(letterCountArr[i]);
        }
    }

    console.log(concatenatedString);
};

frequencySort("tree");
frequencySort("cccaaa");
frequencySort("Aabb");