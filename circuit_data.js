// circuit_data.js　セクター対応
const circuitData = {
    "0": {
        name: "白糸S",
        startLineP1: [138.622532514261, 35.3081896115975],
        startLineP2: [138.622637774426, 35.3080490509764]
    },

// セクター1
        s1LineP1: [138.621000, 35.307500], 
        s1LineP2: [138.621100, 35.307400],
        
        // セクター2 (このように増やします)
        s2LineP1: [138.623000, 35.309000], 
        s2LineP2: [138.623100, 35.308900],
        
        // セクター3 (このように増やします)
        s3LineP1: [138.624000, 35.310000], 
        s3LineP2: [138.624100, 35.309900]
    },


    
    "1": {
        name: "富士C",
        startLineP1: [138.93342054530245, 35.36915226810625],
        startLineP2: [138.93342597911342, 35.369400744949374]
    },
    "2": {
        name: "つま恋",
        startLineP1: [138.05198121210296, 34.76643085806565],
        startLineP2: [138.05223275948995, 34.766356370794476]
    },
    "3": {
        name: "中井C",
        startLineP1: [139.219693211601, 35.35030582177035],
        startLineP2: [139.21950544739443, 35.35034913580831]
    }
};

// HTML側の設計（localStorage + drawSavedLines）に合わせた読み込み関数
function loadCircuitLinesToStorage(circuitId) {
    if (!circuitData[circuitId]) return null;
    
    const data = circuitData[circuitId];
    const targets = ['startLine', 's1Line', 's2Line', 's3Line'];
    
    targets.forEach(t => {
        // 例: startLineP1 や s1LineP1 というキーが存在するかチェック
        if (data[t + 'P1'] && data[t + 'P2']) {
            // [Lng, Lat] の順で格納されているため、[1]がLat、[0]がLon
            localStorage.setItem(t + 'P1Lat', data[t + 'P1'][1]);
            localStorage.setItem(t + 'P1Lon', data[t + 'P1'][0]);
            localStorage.setItem(t + 'P2Lat', data[t + 'P2'][1]);
            localStorage.setItem(t + 'P2Lon', data[t + 'P2'][0]);
        } else {
            // プリセットにそのセクターが無い場合は古い設定を消去
            localStorage.removeItem(t + 'P1Lat');
            localStorage.removeItem(t + 'P1Lon');
            localStorage.removeItem(t + 'P2Lat');
            localStorage.removeItem(t + 'P2Lon');
        }
    });
    
    return data;
}
