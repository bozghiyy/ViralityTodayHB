var PREBID_TIMEOUT = 3000;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var adUnits = adUnits || [];

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    (function() {
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();
    pbjs.initAdserverSet = true;
};
setTimeout(initAdserver, PREBID_TIMEOUT);

function refreshSlot(slot) {
    var codes = [];
    for (var i = 0; i<slot.length; i++)
        codes.push(slot[i].getSlotElementId());
        pbjs.que.push(function() {
         pbjs.requestBids({
           timeout: PREBID_TIMEOUT,
           adUnitCodes: codes,
           bidsBackHandler: function() {
             pbjs.setTargetingForGPTAsync(codes);
             googletag.pubads().refresh(slot);
    }});});}

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
(function() {
    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    pbjsEl.src = "http://www.viralitytoday.com/prebid.min.js";
    var pbjsTargetEl = document.getElementsByTagName("head")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
})();
var dfpSlots = [];
googletag.cmd.push(function() {
    dfpSlots[0] = googletag.defineSlot('/18286141601/PC_728_90', [728, 90], 'div-gpt-ad-PC_728_90').addService(googletag.pubads());
    dfpSlots[1] = googletag.defineSlot('/18286141601/PC_ATF_300_250', [300, 250], 'div-gpt-ad-PC_ATF_300_250').addService(googletag.pubads());
    dfpSlots[2] = googletag.defineSlot('/18286141601/PC_ATF_300_250_2', [300, 250], 'div-gpt-ad-PC_ATF_300_250_2').addService(googletag.pubads());
    dfpSlots[3] = googletag.defineSlot('/18286141601/PC_BTF_300_250', [300, 250], 'div-gpt-ad-PC_BTF_300_250').addService(googletag.pubads());
    dfpSlots[4] = googletag.defineSlot('/18286141601/PC_BTF_300_250_2', [300, 250], 'div-gpt-ad-PC_BTF_300_250_2').addService(googletag.pubads());
    dfpSlots[5] = googletag.defineSlot('/18286141601/PC_ATF_300_600', [
        [300, 600],
        [300, 250]
    ], 'div-gpt-ad-PC_ATF_300_600').addService(googletag.pubads());
});
adUnits.push({
    code: "div-gpt-ad-PC_ATF_300_600",
    sizes: [
        [300, 600],
        [300, 250]
    ],
    bids: [{
        bidder: "brealtime",
        params: {
            placementId: "10955622"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "300x600",
            cp: "558412",
            ct: "526374"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "300x250",
            cp: "558412",
            ct: "526372"
        }
    }, {
        bidder: 'springserve',
        params: {
            impId: '7449-272-2302'
        }
    }, {
        bidder: "sonobi",
        params: {
            dom_id: "div-gpt-ad-PC_ATF_300_600",
            ad_unit: "/18286141601/PC_ATF_300_600"
        }
    }]
});
adUnits.push({
    code: "div-gpt-ad-PC_728_90",
    sizes: [
        [728, 90]
    ],
    bids: [{
        bidder: "brealtime",
        params: {
            placementId: "10955717"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "728x90",
            cp: "558412",
            ct: "506509"
        }
    }, {
        bidder: 'springserve',
        params: {
            impId: '7449-272-1593'
        }
    }, {
        bidder: "sonobi",
        params: {
            dom_id: "div-gpt-ad-PC_728_90",
            ad_unit: "/18286141601/PC_728_90"
        }
    }]
});
adUnits.push({
    code: "div-gpt-ad-PC_ATF_300_250",
    sizes: [
        [300, 250]
    ],
    bids: [{
        bidder: "brealtime",
        params: {
            placementId: "10955827"
        }
    }, {
        bidder: "aol",
        params: {
            placement: "4266204",
            network: "10122.1",
            alias: "4266204"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "300x250",
            cp: "558412",
            ct: "506508"
        }
    }, {
        bidder: 'springserve',
        params: {
            impId: '7449-272-1594'
        }
    }, {
        bidder: "sekindo",
        params: {
            placementId: "9901796"
        }
    }, {
        bidder: "sonobi",
        params: {
            dom_id: "div-gpt-ad-PC_ATF_300_250",
            ad_unit: "/18286141601/PC_ATF_300_250"
        }
    }]
});
adUnits.push({
    code: "div-gpt-ad-PC_BTF_300_250",
    sizes: [
        [300, 250]
    ],
    bids: [{
        bidder: "brealtime",
        params: {
            placementId: "10955922"
        }
    }, {
        bidder: "aol",
        params: {
            placement: "4266202",
            network: "10122.1",
            alias: "4266202"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "300x250",
            cp: "558412",
            ct: "506511"
        }
    }, {
        bidder: 'springserve',
        params: {
            impId: '7449-272-1596'
        }
    }, {
        bidder: "sekindo",
        params: {
            placementId: "9901798"
        }
    }, {
        bidder: "sonobi",
        params: {
            dom_id: "div-gpt-ad-PC_BTF_300_250",
            ad_unit: "/18286141601/PC_BTF_300_250"
        }
    }]
});
adUnits.push({
    code: "div-gpt-ad-PC_BTF_300_250_2",
    sizes: [
        [300, 250]
    ],
    bids: [{
        bidder: "brealtime",
        params: {
            placementId: "10955922"
        }
    }, {
        bidder: "aol",
        params: {
            placement: "4266203",
            network: "10122.1",
            alias: "4266203"
        }
    }, {
        bidder: "pulsepoint",
        params: {
            cf: "300x250",
            cp: "558412",
            ct: "506512"
        }
    }, {
        bidder: 'springserve',
        params: {
            impId: '7449-272-1597'
        }
    }, {
        bidder: "sekindo",
        params: {
            placementId: "9901803"
        }
    }, {
        bidder: "sonobi",
        params: {
            dom_id: "div-gpt-ad-PC_BTF_300_250_2",
            ad_unit: "/18286141601/PC_BTF_300_250_2"
        }
    }]
});
pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);
    pbjs.bidderSettings = {
        standard: {
            adserverTargeting: [{
                key: "hb_bidder",
                val: function(bidResponse) {
                    return bidResponse.bidderCode;
                }
            }, {
                key: "hb_adid",
                val: function(bidResponse) {
                    return bidResponse.adId;
                }
            }, {
                key: "hb_pb",
                val: function(bidResponse) {
                    var cpm = bidResponse.cpm;
                    if (cpm < 0.05) {
                        return '0.01';
                    } else if (cpm < 1) {
                        return (Math.floor(cpm * 20) / 20).toFixed(2);
                    } else if (cpm < 5) {
                        return (Math.floor(cpm * 10) / 10).toFixed(2);
                    } else if (cpm < 20) {
                        return (Math.floor(cpm * 2) / 2).toFixed(2);
                    } else {
                        return '20.00';
                    }
                }
            }]
        },
        brealtime: {
            bidCpmAdjustment: function(bidCpm) {
                return bidCpm * .85;
            }
        },
        aol: {
            bidCpmAdjustment: function(bidCpm) {
                return bidCpm * .80;
            }
        },
        sekindo: {
            bidCpmAdjustment: function(bidCpm) {
                return bidCpm * .75;
            }
        }
    };
    pbjs.requestBids({
        bidsBackHandler: function(bidResponses) {
            initAdserver();
        },
        timeout: PREBID_TIMEOUT
    })
});
googletag.cmd.push(function() {
    pbjs.que.push(function() {
        pbjs.setTargetingForGPTAsync();
    });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});


  setInterval(function(){refreshSlot(dfpSlots);}, 30000);