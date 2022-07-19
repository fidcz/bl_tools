define('module/interface', [], function() {
    "use strict";
    return {
        root: {
            allPoiCheck: "/poi/health/allPoiCheck",
            isB2cCheck: "/poi/health/b2cCheck",
            isMainAccount: "/api/retail/subAccount/type/query",
            isChain: "/v2/chat/im/charge/ischain",
            chatCapability: "/v2/chat/im/capability",
            imCapability: "/v2/chat/im/multi/capability",
            getPoiLogoUrl: "/v2/chat/im/shop/logo",
            chatLaunch: "/v2/chat/im/launch/",
            chatLaunchMulti: "/v2/chat/im/multi/launch/",
            imSwitch: "/v2/chat/im/sc/switch/get",
            groupChatImSwitch: "/v2/chat/im/sc/merchantusergroup/getgroupswitch",
            groupChatImUpdate: "/v2/chat/im/sc/merchantusergroup/updategroupswitch",
            imSwitchBatch: "/v2/chat/im/searchSwitch",
            updateImSwitch: "/v2/chat/im/switch/update",
            uploadImg: "/v2/chat/im/upload/image",
            getTips: "/v2/chat/im/answer/infos",
            getScTips: "/v2/chat/im/sc/answer/infos",
            containsIm: "/v2/chat/im/contains/shop",
            postPubid: "/v2/chat/im/pubid/get",
            getInprogressOrderInfo: "/v2/chat/im/order/inprogress",
            foodRecommendCapability: "/v2/chat/im/productCapability/get",
            getPubids: "/v2/chat/im/multi/pubids/get",
            getPoiIdsByPubIds: "/v2/chat/im/multi/poiids/get",
            unreplay: "/v2/chat/im/unreplay/count",
            unreplayMulti: "/v2/chat/im/multi/unreplay/count",
            getAutoSendConfig: "/v2/chat/im/sc/r/autoSendConfig/get",
            updateStatus: "/v2/chat/im/sc/w/status/update",
            setAutoSendConfig: "/v2/chat/im/sc/w/autoSendConfig/set",
            queryImgroupAccountList: "/v2/chat/im/sc/imgroup/accoutlist",
            querySmartRobotMainSwitch: "/api/retail/im/smartAutoReply/masterSwitch/get",
            updateSmartRobotMainSwitch: "/api/retail/im/smartAutoReply/masterSwitch/update",
            querySceneList: "/api/retail/im/smartAutoReply/scene/get",
            updateSceneInfo: "/api/retail/im/smartAutoReply/scene/update",
            queryNewLabel: "/api/retail/im/tag/get",
            closeNewLabel: "/api/retail/im/tag/report",
            queryShowBoxRemind: "/health/pc/deposit/queryShowBoxRemind",
            confirmShowBoxSuccess: "/health/pc/deposit/confirmShowBoxSuccess"
        },
        logon: {
            accountLogon: "/v2/logon/pass/step1/logon",
            sendSms: "/v2/logon/mobile/sendSms",
            phoneLogon: "/v2/logon/mobile",
            sendPassSms: "/v2/logon/pass/step2/sendSms",
            verify: "/v2/logon/pass/step2/verify"
        },
        index: {
            getBusinessOverview: "/v2/index/r/businessOverview",
            getPreOrderAndFeedback: "/v2/index/r/order",
            getRank: "/v2/index/r/analysis/rank",
            getCustomer: "/v2/index/r/analysis/customer",
            getPerformance: "/v2/index/r/performance",
            getCampaignNotice: "/v2/index/r/campaignNotice",
            getProCampaign: "/v2/index/r/adNotice",
            getMyCampaign: "/v2/index/r/myCampaign",
            getLearnInfo: "/v2/index/r/learning",
            getBanner: "/v2/index/r/banner",
            getAccount: "/index/r/account",
            getImgMessage: "/v2/shop/manage/speedRefund/r/message"
        },
        order: {
            sc: {
                getChangeAddressInfo: "/health/pc/order/modifyAddress/batchAddressInfo",
                submitChangeAddressReply: "/health/pc/order/modifyAddress/updateStatus",
                getChangeAddressOrderList: "/health/pc/order/modifyAddress/auditList",
                getProcessedRefund: "/sc/order/refund/processed/r/query",
                getUnprocessedRefund: "/sc/order/refund/unprocessed/r/query",
                getRefundInfo: "/sc/order/refund/r/list",
                agreeReturn: "/sc/order/refund/w/agreeReturn",
                rejectReturn: "/sc/order/refund/w/rejectReturn",
                agreeRefund: "/sc/order/refund/w/agreeRefund",
                rejectRefund: "/sc/order/refund/w/rejectRefund",
                payToUser: "/sc/order/refund/w/payFreight",
                afterSaleTime: "/sc/order/refund/afterSaleTime/r/query",
                orderExtends: "/sc/order/retail/w/extends",
                uploadToken: "/sc/retail/express/r/excel/uploadToken",
                batchDelivery: "/sc/retail/express/w/excel/upload",
                batchDeliveryList: "/sc/retail/express/r/upload/task/info",
                batchDeliveryCapbility: "/sc/retail/express/r/ability",
                batchDeliveryFailed: "/sc/retail/express/r/excel/download",
                supportMultiPartRefund: "/sc/order/retail/w/extends",
                getLogisticsplats: "/sc/retail/express/logisticsplat/get",
                setExpressTime: "/sc/retail/express/hour/set",
                reportRiderInfo: "/sc/retail/express/report/rider",
                reportLogisticsInfo: "/sc/retail/express/report/logistics",
                getWeightRefundFoodInfo: "/sc/order/refund/gRefund/foodInfo",
                calWeightRefundPrice: "/sc/order/refund/gRefund/calPrice",
                applyWeightRefund: "/sc/order/refund/gRefund/apply",
                getRefundPic: "/sc/order/refund/gRefund/pic/get",
                checkCommodityBatchInfo: "/sc/order/retail/commodity/medical/check",
                addCommodityBatchInfo: "/sc/order/retail/commodity/medical/add",
                fulfillRecordList: "/sc/order/retail/cycle/query/cyclePerformanceOrderList",
                initiateDelivery: "/sc/order/retail/cycle/initiateDelivery",
                cyclePartRefund: "/sc/order/retail/cycle/partRefund/foodInfo",
                calPartRefundPrice: "/sc/order/retail/cycle/partRefund/calPrice",
                partRefundSubmit: "/sc/order/retail/cycle/apply/partRefund",
                cycleOrderPrivacyPhone: "/sc/order/retail/cycle/query/orderPrivacyPhone"
            },
            getSendBtnBannerList: "/v2/order/receive/processed/r/pt/bannerList",
            getChangeAddressOrderCount: "/health/pc/order/modifyAddress/notifyCount",
            getRefundOrderCount: "/v2/order/history/r/refundOrderCount/notify",
            getAbnormalOrderCount: "/health/pc/order/queryUnusualCount",
            getUnprocessedReminderCnt: "/v2/order/customer/reminder/unprocessed/r/count",
            getUnprocessedReminder: "/v2/order/customer/reminder/unprocessed",
            getReminderReply: "/v2/order/customer/reminder/unprocessed/r/exlain",
            postReminderReply: "/v2/order/customer/reminder/unprocessed/w/response/v2",
            queryReminderDetail: "/v2/order/customer/reminder/list/v2",
            queryPoiFavorites: "/v2/order/receive/processed/r/favorites",
            queryriderPayment: "/v2/order/receive/processed/r/riderPayment/list/v2",
            getCommentContext: "/v2/customer/comment/context",
            getCommentSummary: "/v2/customer/commentSummary",
            getComment: "/v2/customer/comment/r/list",
            getMidbadComment: "/v2/customer/comment/r/queryMediumComment",
            getReportConfig: "/v2/customer/comment/r/report/config",
            replyComment: "/v2/order/customer/comment/w/reply",
            changeComment: "/v2/customer/comment/w/changeReply",
            getReportPermit: "/v2/customer/comment/r/permit",
            reportSave: "/v2/customer/comment/w/report",
            getReportInfo: "/v2/customer/comment/r/report/info",
            getNewOrderFromPush: "/v2/order/receive/unprocessed/r/orderFromPush/v2",
            getNewOrderFromInterval: "/v2/order/receive/unprocessed/r/ofq",
            confirmNewOrder: "/v2/order/receive/unprocessed/w/confirm",
            cancelOrder: "/v2/order/receive/unprocessed/w/cancel",
            getNewOrderCount: "/v2/order/receive/unprocessed/r/count",
            getCancelReasons: "/v2/order/receive/cancelReasons/r/get",
            newOrderReceipt: "/v2/order/receive/unprocessed/w/mreceipt",
            getOrderChargeInfo: "/v2/order/receive/r/chargeInfo",
            getOrderMedicareInfo: "/health/pc/medicare/order/amountInfo",
            hasSent: "/v2/order/receive/processed/w/sent/v2",
            sendDistribution: "/v2/order/receive/processed/w/distribute/v2",
            sendDistributionForPtGray: "/v2/order/receive/processed/w/pt/distribute",
            getDistributionStatus: "/v2/order/receive/processed/r/distribute/list/v2",
            getRefundInfo: "/v2/order/refund/list/v2",
            agreeRefund: "/v2/order/refund/unprocessed/w/agree",
            disagreeRefund: "/v2/order/refund/unprocessed/w/reject",
            getReparationInfo: "/v2/order/receive/processed/r/distribute/payment/list/v2",
            getReparationCount: "/v2/order/receive/processed/r/distribute/payment/amount/v2",
            applyReparation: "/v2/order/receive/processed/w/distribute/payment/apply/v2",
            cancelReparation: "/v2/order/receive/processed/w/distribute/payment/cancel/v2",
            acquireOrder: "/v2/order/acquire/unprocessed/r/get",
            confirmAcquiredOrder: "/v2/order/acquire/unprocessed/w/confirm/v2",
            cancelAcquiredOrder: "/v2/order/acquire/unprocessed/w/cancel/v2",
            getNewAcquiringOrderCount: "/v2/order/acquire/unprocessed/r/count",
            cancelDelivery: "/v2/order/receive/processed/w/distribute/cancel/v2",
            confirmCancelDelivery: "/v2/order/receive/processed/w/distribute/cancel/confirm/v2",
            queryProcessedOrderList: "/v2/order/receive/processed/r/query",
            queryUnprocessedCompensate: "/v2/order/compensate/unprocessed/r/query",
            queryProcessedCompensate: "/v2/order/compensate/processed/r/query",
            queryPreOrderList: "/v2/order/pre/r/query",
            getPrintOrderInfo: "/v2/order/history/r/print/info/v2",
            getHistoryOrderDetail: "/v2/order/history/r/detail/v2",
            getDistributionEvaluation: "/v2/order/receive/processed/r/distribute/evaluation/v2",
            submitDistributionEvaluation: "/v2/order/receive/processed/w/distribute/evaluation/v2",
            autoAgreeRefund: "/v2/order/refund/unprocessed/w/autoAgree/v2",
            queryHisOrderList: "/v2/order/history/r/query",
            getShippingFee: "/v2/order/receive/processed/r/distribute/shippingFee/v2",
            addTipAmount: "/v2/order/receive/processed/w/distribute/tipAmount/v2",
            getProcessedRefund: "/v2/order/refund/processed/r/query",
            getUnprocessedRefund: "/v2/order/refund/unprocessed/r/query",
            getDeliveryDistance: "/v2/order/receive/processed/r/distribute/pathDistance/v2",
            getDeliveryCancelReasons: "/v2/order/receive/processed/r/distribute/cancel/reason/v2",
            getNumAndAmount: "/v2/order/receive/r/countAndSumOfToday",
            closeGprs: "/v2/shop/systemSettings/w/closeGPRS",
            getCanceledCount: "/v2/order/receive/distribute/r/canceledCount",
            getUnprocessedCount: "/v2/order/receive/distribute/r/unprocessedCount",
            getStyle: "/v2/shop/systemSettings/r/wmPoi",
            getOrderAsyncInfos: "/v2/order/receive/processed/r/orderAsyncInfos/v3",
            recipientPhone: "/v2/order/receive/processed/r/recipientPhone/v2",
            refundAgreeOrNot: "/v2/order/refund/r/judge",
            refundAgree: "/v2/order/refund/w/agree",
            getPartRefundFoodInfo: "/v2/order/refund/partRefund/foodInfo",
            getPartRefundFoodPrice: "/v2/order/refund/partRefund/calPrice",
            applyPartRefund: "/v2/order/refund/partRefund/apply",
            rejectReason: "/v2/order/refund/unprocessed/r/rejectReason",
            completeDelivery: "/v2/order/receive/delivery/complete",
            isTipAmountGray: "/v2/order/receive/processed/w/distribute/tipAmount/grep/v3"
        },
        shop: {
            sc: {
                getReturnAddress: "/sc/address/poi/getReturnAddress",
                setReturnAddress: "/sc/address/poi/setReturnAddress",
                expressCapability: "/sc/retail/express/poiinfo/get",
                generateQrCode: "/sc/shop/generateQrCode",
                saveOrderLimit: "/v2/shop/orderLimit/w/update",
                batchSaveOrderLimit: "/v2/shop/orderLimit/w/batchUpdate",
                savePacket: "/v2/shop/packet/w/update",
                batchCheckPacket: "/v2/shop/packet/w/batchCheck",
                batchSavePacket: "/v2/shop/packet/w/batchUpdate",
                batchSaveDrugQuality: "/v2/shop/drugQuality/w/batchUpdate",
                checkModifyAuth: "/v2/shop/businessStatus/r/checkPoiContain"
            },
            changeAccountPwd: "/v2/shop/accountSettings/w/changePassword",
            verifyPwd: "/v2/shop/accountSettings/r/validateUserPass",
            msgLink: "/v2/help/msgbox/r/msglink",
            delQual: "/v2/shop/businessQualification/w/deleteQual",
            saveQual: "/v2/shop/businessQualification/w/saveQual",
            saveSound: "/v2/shop/systemSettings/w/saveReminder",
            switchMultiLog: "/v2/shop/accountSettings/w/updateMultiLog",
            saveArea: "/v2/shop/distributionSettings/w/saveArea",
            deleteArea: "/v2/shop/distributionSettings/w/deleteArea",
            deleteDeliveryPlan: "/v2/shop/distributionSettings/w/deleteDeliveryPlan",
            saveShopInfo: "/v2/shop/shopInfo/w/savePoi",
            uploadImage: "/v2/shop/businessQualification/w/uploadImage",
            poiTagList: "/v2/shop/shopInfo/r/tag",
            poiListSearch: "/v2/shop/businessStatus/r/poiListSearch",
            distinguish: "/health/pc/shop/info/distinguish",
            getTaskId: "/health/pc/shop/info/download",
            getPolling: "/health/pc/shop/info/polling",
            noOpenPrivilege: "/v2/shop/businessStatus/r/unOpenWeightPoiList",
            batchOpenShop: "/v2/shop/businessStatus/w/batchSetSelfOnline",
            batchUpdateWmPoiBusinessTimeInfo: "/v2/shop/businessStatus/w/batchUpdateWmPoiBusinessTimeInfo",
            batchSetBulletin: "/v2/shop/businessStatus/w/batchSetBulletin",
            batchSetCallCenter: "/v2/shop/businessStatus/w/batchSetCallCenter",
            batchSetAutoAcceptType: "/v2/shop/businessStatus/w/batchSetAutoAcceptType",
            batchSetStatus: "/v2/shop/businessStatus/w/batchSetStatus",
            getPrintModels: "/v2/shop/systemSettings/r/getPrintTemplate",
            getWmAcctContact: "/v2/shop/systemSettings/r/getWmAcctContact",
            bindVerifyAcctPass: "/v2/shop/accountSettings/bind/step1/verifyAcctPass",
            bindSendSms: "/v2/shop/accountSettings/bind/step2/sendSms",
            bindBindindNewPhone: "/v2/shop/accountSettings/bind/step3/bindNewPhone",
            openSendSms: "/v2/shop/accountSettings/open/step1/sendSms",
            openSmsLogin: "/v2/shop/accountSettings/open/step2/openSmsLogin",
            rebindVerifyAcctPass: "/v2/shop/accountSettings/rebind/step1/verifyAcctPass",
            rebindSendSms: "/v2/shop/accountSettings/rebind/step1/sendSms",
            rebindVerifyBindPhone: "/v2/shop/accountSettings/rebind/step1/verifyBindPhone",
            rebindIsBindByOtherAcct: "/v2/shop/accountSettings/rebind/step2/isBindByOtherAcct",
            rebindSendNewSms: "/v2/shop/accountSettings/rebind/step2/sendSms",
            rebindBindNewPhone: "/v2/shop/accountSettings/rebind/step3/bindNewPhone",
            updateNewDeviceVerify: "/v2/shop/accountSettings/w/updateNewDeviceVerify",
            contractList: "/v2/shop/contract/r/list",
            contractListAgent: "/v2/shop/contract/r/C2list",
            batchVerify: "/v2/campaign/shopActivity/w/batchVerify",
            kickByDeviceUuid: "/v2/logon/kickByDeviceUuid",
            logonHistory: "/v2/logon/history",
            logonHistorySelf: "/v2/logon/history/self",
            isNeedAudit: "/v2/shop/distributionSettings/r/isNeedAudit",
            getOptionalLogos: "/v2/shop/shopInfo/r/getPicLists",
            getLogoInfo: "/v2/shop/shopInfo/r/poiPicUrl",
            uploadLogoPic: "/v2/shop/shopInfo/w/savePoiPic",
            updateStoreInfo: "/v2/shop/shopInfo/w/update/shopName",
            canModify: "/v2/shop/shopInfo/r/check/canModify",
            getCategoryCell: "/v2/shop/shopInfo/r/get/cates",
            getPoiQrCode: "/sc/shop/poi/address/qrCode/get",
            getSpeedRefundDataForSingle: "/v2/shop/manage/speedRefund/r/data/poi",
            openSpeedRefundForSingle: "/v2/shop/manage/speedRefund/w/open",
            closeSpeedRefundForSingle: "/v2/shop/manage/speedRefund/w/close",
            getSpeedRefundDataForAll: "/v2/shop/manage/speedRefund/r/data/poiList",
            getSpeedRefundListForAll: "/v2/shop/manage/speedRefund/r/list",
            openSpeedRefundForAll: "/v2/shop/manage/speedRefund/w/open/batch",
            closeSpeedRefundForAll: "/v2/shop/manage/speedRefund/w/close/batch",
            uploadBase64: "/v2/shop/decoration/w/upload/base64",
            getFeedbackRecord: "/bizdata/businessStatisticsV2/feedback/getFeedbackRecord",
            feedback: "/bizdata/businessStatisticsV2/feedback/likePage",
            tabPaneList: "/v2/shop/decoration/r/queryCategory",
            templateList: "/v2/shop/decoration/r/queryTemplate",
            goUpdate: "/v2/shop/manage/distributionSettings/upgrade",
            closeDispatcher: "/v2/shop/manage/distributionSettings/closeDispatcher",
            getPrintType: "/api/printType/get",
            setPrintType: "/api/printType/set",
            setPrintIsGray: "/api/retail/receipt/template/refactor/isGray",
            queryCustomerConfig: "/v2/chat/im/sc/brand/consult/config/query",
            setMessageShuntStatus: "/v2/chat/im/sc/brand/consult/config/offline/update",
            checkPoi: "/api/retail/subAccount/poi/check",
            checkAccount: "/api/retail/subAccount/account/name/check",
            isB2cPoi: "/health/pc/merchant/shop/isB2cPoi",
            getPoiAddressInfo: "/health/pc/merchant/storeaddress",
            getPoiModifyStatus: "/health/pc/merchant/coordinate/button",
            poiModifySubmit: "/health/pc/merchant/coordinate/update",
            getPoiDeliveryType: "/health/pc/merchant/deliveryType",
            getPoiAddressDisplay: "/health/pc/merchant/coordinate/show",
            getPoiType: "/health/pc/merchant/getPoiType",
            showCustomsDeclare: "/health/pc/shop/whitePoi",
            saveCustomsDeclare: "/health/pc/shop/customs/save",
            getCustomsDeclareInfo: "/health/pc/shop/customs/get",
            getCustomsPortsList: "/health/pc/shop/customs/getPort",
            queryPoiOpenStatistics: "/health/center/shop/delivery/queryPoiOpenStatistics",
            queryMultiStoreDeliveryInfo: "/health/center/shop/delivery/queryMultiStoreDeliveryInfo",
            batchUpdate: "/health/center/shop/delivery/dynamicPrice/batchUpdate",
            queryProcessingProgress: "/health/center/shop/delivery/dynamicPrice/batchUpdate/polling"
        },
        productManage: {
            sc: {
                searchMedicine: "/v2/product/medicine/search",
                getMedicineCategories: "/v2/product/medicine/getCategories"
            },
            spuList: "/reuse/product/food/r/spuList",
            searchByName: "/reuse/product/food/r/searchByName"
        },
        help: {
            getSuggest: "/v2/feedback/r/list",
            addSuggest: "/v2/feedback/w/add",
            replySuggest: "	/v2/feedback/w/reply"
        },
        common: {
            getServerTime: "/v2/order/pre/r/unixTime",
            ajaxExceptionReport: "/api/log/exception/w/report",
            postHearbeatRestLog: "/v2/common//heartbeat/w/log",
            getAutoAcceptCount: "/v2/shop/systemSettings/r/getAutoAcceptCount",
            getBusinessStatus: "/common/businessStatus",
            getIfBusy: "/v2/common/status/r/ifBusyStatus",
            getExceptionInfo: "/index/unprocessed/r/ErrorMsgInfo",
            transcoding: "/v2/common/query/transcoding",
            getSearchTag: "/api/retail/v3/order/getSearchTag"
        },
        pc: {
            report: "/v2/pc/report/log/info"
        }
    }
});
define('module/cookie', [], function() {
    function e(e, o) {
        var n = arguments[2] ? arguments[2] : "";
        document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + n
    }
    function o(e) {
        for (var o = e + "=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
            var i = $.trim(n[t]);
            if (0 == i.indexOf(o))
                return decodeURIComponent(i.substring(o.length, i.length))
        }
        return ""
    }
    function n(e, o, n) {
        if (n) {
            var t = new Date;
            t.setTime(t.getTime() + 1e3 * n),
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + t.toUTCString()
        } else
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/"
    }
    function t(e) {
        var n = new Date;
        n.setTime(n.getTime() - 1);
        var t = o(e);
        null != t && (document.cookie = e + "=" + t + "; path=/; expires=" + n.toUTCString())
    }
    return {
        setCookie: e,
        getCookie: o,
        setCookieEx: n,
        delCookie: t
    }
});
define('util/ubl', ["module/cookie"], function(e) {
    "use strict";
    function t() {
        var e = (new Date).getTime()
          , t = localStorage.getItem("ad_ubl_sessionid") || 0
          , i = e - t > 18e5 ? !0 : !1;
        return i && localStorage.setItem("ad_ubl_sessionid", e),
        localStorage.getItem("ad_ubl_sessionid")
    }
    $(document).delegate('.ubl[data-ubl-action="click"]', "click", function() {
        var i = e.getCookie("wmPoiId")
          , a = $(this)
          , l = a.data("ublDes") || ""
          , o = a.data("ublType") || "default"
          , c = {}
          , d = {
            nm: "mge",
            val: {
                act: "click",
                lab: {
                    element_id: l,
                    poi_id: i
                }
            }
        };
        switch (o) {
        case "ad":
            c = {
                val: {
                    val: {
                        ad_sessionid: t(),
                        ad_poiid: i
                    }
                }
            }
        }
        $.extend(!0, d, c),
        Analytics("event", d),
        "function" == typeof mta && mta("count", "click." + l)
    });
    var i = document.title
      , a = e.getCookie("wmPoiId");
    return Analytics("set", {
        visitid: e.getCookie("wmPoiId") + t(),
        cityid: e.getCookie("city_id"),
        uid: e.getCookie("acctId"),
        poi_id: a
    }),
    Analytics("send", "pv", {
        cid: i,
        val: {
            lab: {
                poi_id: a
            }
        },
        ref: localStorage.getItem("REF_PAGE_ID") || ""
    }),
    localStorage.setItem("REF_PAGE_ID", i),
    window.LXAnalyticsSG = function(e, t, i) {
        var l = {
            nm: "mge",
            val_cid: i.cid,
            val: {
                lab: {
                    poi_id: a
                }
            }
        };
        switch (e) {
        case "moduleClick":
            $.extend(!0, l, {
                val_bid: t,
                val: {
                    act: "click"
                }
            })
        }
        $.extend(!0, l.val.lab, i),
        Analytics("event", l)
    }
    ,
    {
        reportShow: function(e) {
            var t = {
                nm: "mge",
                val: {
                    act: "show",
                    lab: e,
                    val: {
                        times: 1
                    }
                }
            };
            Analytics("event", t)
        }
    }
});
define('module/sys_api', ["module/cookie"], function(e) {
    var n = window.wmSystemApi
      , t = n && n.getAppInfo && n.getAppInfo();
    if (n) {
        var o = function(o) {
            if (t.code >= 4010)
                n.getDeviceReportData().then(function(e) {
                    o({
                        sys: e.sys,
                        usb: e.usb,
                        appVersion: t.code
                    })
                });
            else if (t.code < 4e3) {
                var a = function(e, o) {
                    var a = "";
                    n.createCommand(function(e) {
                        "out" === e.type && (a += e.str),
                        "close" === e.type && o && o(a)
                    }).execute(t.exePath + '\\AppDiagnose.exe "/command:' + e + '"')
                }
                  , i = [{
                    type: "sys",
                    command: "sys",
                    deal: function(e) {
                        return e ? e.replace(/修补程序[^\n]*\n(\s+[^\n]*\n)*/g, "") : ""
                    }
                }, {
                    type: "usb",
                    command: "usb /title:name"
                }]
                  , s = 0
                  , c = function(t) {
                    var p = i[t];
                    a(p.command, function(t) {
                        if (p.data = p.deal ? p.deal(t) : t,
                        ++s < i.length)
                            c(s);
                        else {
                            var a = {
                                wmPoiId: e.getCookie("wmPoiId")
                            };
                            $(i).each(function() {
                                a[this.type] = this.data
                            });
                            var f = n && n.getAppInfo && n.getAppInfo();
                            a.appVersion = f && f.code || 0,
                            "function" == typeof o && o(a)
                        }
                    })
                };
                c(s)
            }
        };
        return {
            sys: n,
            appInfo: t,
            getSysInfo: o
        }
    }
    return null
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('util/utils', ["module/cookie"], function(e) {
    "use strict";
    return {
        urlParams: function(e) {
            e = e || window.location.search;
            var t = {}
              , r = new RegExp("([^?=&]+)(=([^&]*))?","g");
            return e && e.replace(r, function(e, r, o, n) {
                t[r] = n
            }),
            t
        },
        getTime: function(e, t) {
            var r = t ? new Date(1e3 * t) : new Date
              , o = {
                "M+": r.getMonth() + 1,
                "d+": r.getDate(),
                "h+": r.getHours(),
                "m+": r.getMinutes(),
                "s+": r.getSeconds(),
                "q+": Math.floor((r.getMonth() + 3) / 3),
                S: r.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in o)
                new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
            return e
        },
        changeDate: function(e) {
            var t = new Date;
            t.setDate(t.getDate() + 1 - 1 * e);
            var r = t.getFullYear()
              , o = t.getMonth() + 1
              , n = t.getDate();
            return 10 > o && (o = "0" + o),
            10 > n && (n = "0" + n),
            r + "-" + o + "-" + n
        },
        getOffsetDays: function(e, t) {
            var r = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}( \\d{1,2}:\\d{1,2}:\\d{1,2})?$");
            if (!r.test(e) || !r.test(t))
                return null;
            var o = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
            o.test(e) && (e += " 00:00:00"),
            o.test(t) && (t += " 23:59:59");
            var n = new Date(e)
              , i = new Date(t);
            if (isNaN(n)) {
                var a = e.split(/[- :]/)
                  , c = t.split(/[- :]/);
                n = new Date(a[0],a[1] - 1,a[2],a[3],a[4],a[5]),
                i = new Date(c[0],c[1] - 1,c[2],c[3],c[4],c[5])
            }
            var s = n.getTime()
              , l = i.getTime();
            return s > l ? -1 : (l - s + 1e3) / 864e5
        },
        formatSecond: function(e, t, r) {
            if (0 >= e)
                return '<strong class="time">00</strong>:<strong class="time">00</strong>:<strong class="time">00</strong>';
            if (r) {
                var o = Math.floor(e / 86400)
                  , n = o > 0 ? '<strong class="time">' + o + "</strong>" : '<strong class="time">00</strong>';
                e %= 86400
            }
            var i = Math.floor(e / 3600)
              , a = i > 0 ? '<strong class="time">' + (i >= 10 ? i : "0" + i) + "</strong>" : '<strong class="time">00</strong>';
            e %= 3600;
            var c = Math.floor(e / 60)
              , s = c > 0 ? '<strong class="time">' + (c >= 10 ? c : "0" + c) + "</strong>" : '<strong class="time">00</strong>';
            e %= 60;
            var l = e > 0 ? '<strong class="time">' + (e >= 10 ? e : "0" + e) + "</strong>" : '<strong class="time">00</strong>';
            return t ? r ? n + "天" + a + "小时" + s + "分钟" + l + "秒" : a + "小时" + s + "分钟" + l + "秒" : r ? n + ":" + a + ":" + s + ":" + l : a + ":" + s + ":" + l
        },
        countDown: function(e) {
            var t = this
              , r = new Date
              , o = 0
              , n = !1
              , i = function() {
                if (!document.body.contains || document.body.contains(e.jQelem[0])) {
                    var a = Math.floor((new Date - r) / 1e3);
                    e.countStyle ? (o = e.time - a,
                    e.midTime && o <= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0))) : (o = e.time + a,
                    e.midTime && o >= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0)));
                    var c = t.formatSecond(0 > o ? 0 : o, e.chn, e.needDay);
                    return e.jQelem.html(e.txt.replace("{time}", c)),
                    0 > o ? (o = 0,
                    e.jQelem.trigger("endCount"),
                    void ("function" == typeof e.cb && e.cb())) : void setTimeout(i, 1e3)
                }
            };
            i()
        },
        setStorage: function(e, t) {
            var r = window.wmSystemApi;
            r ? (t = String(t),
            r.setStorage(e, encodeURIComponent(t))) : localStorage.setItem(e, t)
        },
        getStorage: function(e) {
            var t, r = window.wmSystemApi;
            return r ? (t = r.getStorage(e),
            t && (t = decodeURIComponent(r.getStorage(e)))) : t = localStorage.getItem(e),
            t
        },
        removeStorage: function(e) {
            var t = window.wmSystemApi;
            t ? t.setStorage(e, "") : localStorage.removeItem(e)
        },
        replaceChinese: function(e) {
            return e.replace(/[^\x00-\xff]/g, "")
        },
        checkTag: function(e) {
            return /<|>/.test(e)
        },
        showTip: function(e, t) {
            e || (e = "未知错误"),
            $().inform({
                type: t ? t : "warn",
                title: e,
                delay: e.length < 10 ? 2e3 : 200 * e.length,
                size: "large"
            })
        },
        filterShowString: function(e) {
            return e.replace(/[<>"&]/g, function(e) {
                switch (e) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case '"':
                    return "&quot;";
                case "&":
                    return "&amp;";
                default:
                    return e
                }
            })
        },
        ifAutoAccept: function(e) {
            var t = localStorage.getItem("autoAcceptWmPoiList") || "";
            if (!t)
                return !1;
            for (var r = t.split(","), o = 0, n = r.length; n > o; o++)
                if (e == r[o])
                    return !0;
            return !1
        },
        getGraphicPrintConfig: function(t) {
            try {
                t = t || e.getCookie("wmPoiId");
                var r = JSON.parse(localStorage.getItem("GraphicPrintAfterOrderAcceptConfig") || "{}");
                return r[t] || {}
            } catch (o) {}
            return {}
        },
        graphicPrintAfterOrderConfirm: function(e, t, r) {
            var o = this.getGraphicPrintConfig(t);
            if ("" + o.auto == "1") {
                var n = 0 === e.code
                  , i = "object" == typeof e.data && 1 === e.data.updateStatus;
                n && i ? (this.graphicPrint(t, r, o),
                this.reportMC("b_shangou_online_e_46grpax8_mc", "c_shangou_online_e_vbzrhmnc")) : (this.reportMC("b_shangou_online_e_28cu7gpz_mc", "c_shangou_online_e_vbzrhmnc"),
                this.ajaxWarn("接单失败", {
                    tag1: n ? "接口调用成功" : "接口调用失败"
                }, "utils.graphicPrintAfterOrderConfirm"))
            }
        },
        graphicPrint: function(e, t, r) {
            window.nw && (console.log("接单后自动A4打印"),
            window.nw.Window.open(location.protocol + "//" + location.host + "/page/printer/graphic/template?orderId=" + t + "&wmPoiId=" + e + "&copies=" + r.copies + "&printer=" + encodeURIComponent(r.printer) + "&mode=auto&callFrom=pcapi", {
                show: !1
            }))
        },
        multiply: function(e, t) {
            var r = 0
              , o = e.toString()
              , n = t.toString();
            try {
                r += o.split(".")[1].length
            } catch (i) {}
            try {
                r += n.split(".")[1].length
            } catch (i) {}
            return Number(o.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, r)
        },
        getVerifyCode: function(e, t, r) {
            var o = this;
            e.off("endCount").on("endCount", function() {
                e.text("免费获取手机动态码"),
                e.removeAttr("disabled")
            }),
            r(function() {
                e.attr("disabled", !0),
                o.countDown({
                    countStyle: !0,
                    time: 60,
                    jQelem: e,
                    txt: t
                })
            })
        },
        reportLogData: function(e, t) {
            var r = {
                nm: "mge",
                val: {
                    act: e,
                    lab: t
                }
            };
            Analytics("event", r)
        },
        changeImgUrl: function(e, t) {
            return e.indexOf("/0.0.o") > -1 && (e = e.replace("/0.0.o", "")),
            localStorage.getItem("hasSupportWebp") && (e += ".webp"),
            e += "@" + t + "w"
        },
        getPoiNickName: function() {
            var t = e.getCookie("wmPoiId")
              , r = this.getStorage("poiNickName" + t);
            if (!r) {
                var o = e.getCookie("wmPoiName") || localStorage.getItem("wmPoiName")
                  , n = e.getCookie("device_uuid").substr(-2);
                r = (-1 == t ? "总店" : o) + "客服" + n
            }
            return r
        },
        isOrNewThanChrome70: function() {
            var e = navigator.userAgent
              , t = Number((e.match(/Chrome\/(\d+)\./) || [])[1]);
            return t >= 70
        }(),
        reportPV: function(t, r, o) {
            if (!t)
                return void console.error("pv未填写cid");
            var n = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, r)
            }
              , i = $.extend({}, {
                uid: ""
            }, o);
            try {
                LXAnalytics("pageView", n, i, t)
            } catch (a) {}
        },
        reportMV: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mv未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleView", t, a, s)
            } catch (l) {}
        },
        reportMVList: function(t, r, o, n) {
            if (!t)
                return void console.error("mv未填写bid");
            var i = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            }
              , a = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleViewList", t, i, a)
            } catch (c) {}
        },
        reportMC: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mc未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleClick", t, a, s)
            } catch (l) {}
        },
        reportMC_SG: {
            setCid: function(t) {
                return t ? void e.setCookie("LX_SC_CONSTANT", t) : void console.error("mc未填写cid")
            },
            report: function(t, r, o) {
                if (!t)
                    return void console.error("mc未填写bid");
                r = r || {};
                var n = {
                    poi_id: e.getCookie("wmPoiId"),
                    order_id: r.order_id || ""
                };
                n = $.extend({}, n, r);
                var i = {
                    cid: o || e.getCookie("LX_SC_CONSTANT")
                };
                try {
                    LXAnalytics("moduleClick", t, n, i)
                } catch (a) {}
            }
        },
        addJsError: function(t, r) {
            console.warn(t),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.wmPoiId = e.getCookie("wmPoiId"),
            r.acctId = e.getCookie("acctId"),
            window.Owl.addError(t, {
                level: "warn",
                combo: !1,
                tags: r
            }))
        },
        ajaxWarn: function(t, r, o) {
            console.warn(t, o),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.userId = e.getCookie("wmPoiId"),
            window.Owl.addError("string" == typeof o ? {
                name: t,
                msg: o
            } : t, {
                level: "warn",
                category: "ajaxError",
                tags: r
            }))
        },
        versionCompare: function(e, t) {
            function r(e, t) {
                return "number" != typeof e && (e = 0),
                "number" != typeof t && (t = 0),
                e > t ? n : t > e ? i : a
            }
            var o, n = 1, i = -1, a = 0, c = String(e).split(".").map(function(e) {
                return parseInt(e)
            }), s = String(t).split(".").map(function(e) {
                return parseInt(e)
            }), l = Math.max(c.length, s.length);
            if (void 0 == e || void 0 == t)
                throw new Error;
            if (0 == e.length && 0 == t.length)
                return a;
            if (0 == e.length)
                return i;
            if (0 == t.length)
                return n;
            for (var u = 0; l > u && (o = r(c[u], s[u]),
            o == a); u++)
                ;
            return o
        },
        getStaticVersion: function(e) {
            var t;
            if ("iframe" === e) {
                if (window.sameSrc) {
                    var r = window.frames[0];
                    try {
                        t = r.VM
                    } catch (o) {
                        console.error("frame blocked")
                    }
                }
            } else
                t = window.VM;
            var n = (t || {}).STATIC_URL || ""
              , i = n.indexOf("/static");
            return n.slice(i + 8, i + 16) || ""
        },
        customReport: function(e, t) {
            if (Owl && Owl.metricManager) {
                var r = Owl.metricManager;
                t && r.setTags(t),
                r.setMetric(e, 1),
                r.report()
            }
        },
        detectCrash: function() {
            if (window.localStorage && window.performance && window.performance.memory) {
                var e = "crash"
                  , t = this
                  , r = t.getStorage(e)
                  , o = window.performance.memory;
                r && t.customReport(e, JSON.parse(r)),
                window.crash_heartbeat = function() {
                    r = {
                        memory: Math.min(Math.ceil(o.usedJSHeapSize / (o.totalJSHeapSize || 1) * 100), 100),
                        hash: location.hash.split("?")[0].replace(/\W+/g, "|")
                    },
                    t.setStorage(e, JSON.stringify(r))
                }
                ,
                window.addEventListener("beforeunload", function() {
                    t.removeStorage(e)
                }, !1)
            }
        },
        url2Cid: function() {
            var e = {
                "/v2/order/pre": "c_bd35rzn5",
                "/v2/order/reminder": "c_v48si7wf",
                "/v2/order/refund/unprocessed": "c_o1skm0jl",
                "/v2/order/change_address": "c_waimai_7hhk8b99",
                "/v2/order/history": "c_nehoktcu",
                "/v2/order/deliveryException": "c_pxn9pjfg",
                "/v2/order/compensate/unprocessed": "c_kfuonr1m"
            }
              , t = location.hash.split("?")[0].slice(0) || location.pathname;
            return e[t] || "c_nehoktcu"
        },
        _debounce: function(e, t) {
            var r = null;
            return function() {
                var o = this
                  , n = arguments;
                clearTimeout(r),
                r = setTimeout(function() {
                    e.apply(o, n)
                }, t)
            }
        },
        getLocalAllPoiList: function() {
            return "object" == typeof CommConstants && CommConstants.waimai_e_poi_list ? CommConstants.waimai_e_poi_list : JSON.parse(localStorage.getItem("localAllPoiList")) || []
        },
        ownRightReportBid: {
            beforeOrder: "b_shangou_online_e_v9x42u5d_mv",
            orderDetail: "b_shangou_online_e_fho0spxq_mv",
            orderDetailClick: "b_shangou_online_e_fho0spxq_mc",
            beforeOrdered: "b_shangou_online_e_1pi68e7q_mv",
            ordered: "b_shangou_online_e_sm8oxu53_mv"
        }
    }
});
define('module/set', ["module/cookie", "util/utils"], function(o, e) {
    var r = "set_info"
      , i = function(o) {
        return null == o || "string" == typeof o && "" === o.trim()
    }
      , n = function(e) {
        if (null != e) {
            var n;
            e.ignoreSetRouterProxy ? n = {
                wmPoiId: e.wmPoiId,
                ignoreSetRouterProxy: !0
            } : i(e.regionId) || (n = {
                wmPoiId: e.wmPoiId,
                region_id: e.regionId,
                region_version: e.regionVersion
            }),
            null != n && o.setCookie(r, JSON.stringify(n))
        }
    }
      , t = function() {
        var e;
        try {
            var n = o.getCookie(r);
            if (!i(n)) {
                try {
                    e = JSON.parse(decodeURIComponent(n))
                } catch (t) {
                    e = JSON.parse(n)
                }
                "string" == typeof e && (e = JSON.parse(e))
            }
        } catch (t) {
            console.warn("SET化参数获取失败")
        }
        if (null == e)
            return null;
        var u = o.getCookie("wmPoiId")
          , g = String(e.wmPoiId);
        return u !== g ? (console.warn("SET化参数门店ID不匹配"),
        null) : e.ignoreSetRouterProxy === !0 ? {
            ignoreSetRouterProxy: !0
        } : i(e.region_id) ? null : {
            region_id: e.region_id,
            region_version: e.region_version
        }
    };
    return {
        saveParams: n,
        getParams: t
    }
});
define('module/ajax_util', ["module/interface", "module/set", "util/utils"], function(e, r, n) {
    var t = jQuery.ajax
      , o = $(".J-csrf-token")
      , a = $(".J-sign-token")
      , i = o.val()
      , d = a.val()
      , u = [e.order.getNewOrderFromInterval, e.order.queryProcessedOrderList, e.order.queryHisOrderList];
    o.remove(),
    a.remove();
    var s = function(r) {
        return r && r.indexOf(e.order.queryHisOrderList) > -1 ? 100007 : r && r.indexOf(e.order.recipientPhone) > -1 ? 100008 : r && r.indexOf(e.order.getPrintOrderInfo) > -1 ? 100009 : r && r.indexOf(e.order.queryProcessedOrderList) > -1 ? 100040 : null
    }
      , l = location.origin
      , c = function(e) {
        var r = [];
        for (var n in e)
            r.push(n + "=" + e[n]);
        return r.join("&")
    }
      , f = function(e, r) {
        for (var n = 0, t = e.length; t > n; n++)
            if (r && -1 !== r.indexOf(e[n]))
                return !0
    }
      , p = function(e) {
        if (e) {
            for (var r = "", n = 0, t = e.length; t > n; n++)
                r += String.fromCharCode(2 ^ e.charCodeAt(n));
            return r
        }
        return ""
    }
      , v = p(d);
    $.ajax = function(e, o) {
        "string" == typeof e && (e = $.extend({
            url: e
        }, o)),
        e.type && "post" === e.type.toLowerCase() && (e.data && "function" == typeof e.data.append ? e.data.append("csrfToken", i) : e.data = $.extend(e.data || {}, {
            csrfToken: i
        })),
        f(u, e.url) && (e.data && "function" == typeof e.data.append ? e.data.append("signToken", v) : e.data = $.extend(e.data || {}, {
            signToken: v
        }));
        var a = r.getParams();
        if (a) {
            var d = (e.method || e.type || "GET").toUpperCase()
              , p = "GET" === d ? e.data || {} : n.urlParams(e.url);
            if ((null != p.region_id || null != p.region_version || null != p.ignoreSetRouterProxy) && console.warn("region_id、region_version与ignoreSetRouterProxy为SET化保留参数，请勿设置"),
            "GET" === d)
                e.data = $.extend(e.data, a);
            else {
                var g = e.url
                  , x = g.indexOf("?");
                -1 === x ? g += "?" : x !== g.length - 1 && (g += "&");
                var h = [];
                for (var y in a)
                    h.push(y + "=" + a[y]);
                g += h.join("&"),
                e.url = g
            }
        }
        var O = function(e, r, n) {};
        e.success && jQuery.isFunction(e.success) && (O = e.success),
        e.success = function(r, n, t) {
            4001 === r.code || 4002 === r.code || 1017 === r.code || O(r, n, t),
            Owl && Owl.addApi({
                name: e.url,
                statusCode: r.code
            })
        }
        ;
        var m = function(e, r, n) {};
        "function" == typeof e.error && (m = e.error),
        e.error = function(e, r, n) {
            m(e, r, n)
        }
        ;
        var _ = s(e.url);
        if (_) {
            Rohr_Opt.Flag = _;
            var P = c(e.data ? e.data : {});
            Rohr_Opt.reload(l + e.url + (P ? (e.url.indexOf("?") > -1 ? "&" : "?") + P : "")),
            e.data ? e.data._token = rohrdata : e.data = {
                _token: rohrdata
            }
        }
        return t(e)
    }
    ,
    Vue && Vue.http && (Vue.http.interceptors.push(function(e, n) {
        var t = e.data || {};
        (null != t.region_id || null != t.region_version || null != t.ignoreSetRouterProxy) && console.warn("region_id、region_version与ignoreSetRouterProxy为SET化保留参数，请勿设置");
        var o = r.getParams();
        e.params = $.extend(e.params, o),
        n()
    }),
    Akita && Akita.interceptors.vueResource.use(Vue.http))
});
define('module/page_jump', [], function() {
    function t() {
        return window.topWindow ? window : parent
    }
    function o(t) {
        var o = t.replace(/(http|https):\/\//, "")
          , e = location.host + "/#";
        return o.startsWith(e)
    }
    return $(document).delegate(".page-jump", "click", function() {
        var o = t()
          , e = o.location.hash.substr(1)
          , a = $(this).data("url")
          , n = $(this).data("medicine-url")
          , i = $(this).data("selectLabel");
        "medicine" == window.CommConstants.shopCate && n && (a = n),
        i && localStorage.setItem("selectLabel", i),
        o.location.hash = a,
        a === e && "function" == typeof o.goPager && o.goPager()
    }),
    {
        go: function(o) {
            var e = t()
              , a = e.location.hash.substr(1)
              , n = o;
            if (e.location.hash = o,
            n === a) {
                var i = localStorage.getItem("nojump");
                localStorage.removeItem("nojump"),
                "true" != i && e.location.reload()
            }
        },
        goMessage: function(t) {
            t && (o(t) ? parent.location.href = t : this.go("/v2/shop/msgbox/wrap?redirect=" + encodeURIComponent(t)))
        }
    }
});
!function(t, e) {
    "function" == typeof define && define.amd ? define('module/bridge/bridge_app', [], e) : "object" == typeof exports ? module.exports = e() : t.bridge = e()
}(this, function() {
    function t(t, e) {
        var n = JSON.stringify({
            method: t,
            args: Array.prototype.slice.call(e || [])
        });
        parent.postMessage(n, "*")
    }
    function e(t) {
        var e = new Date;
        e.setTime(e.getTime() - 1),
        document.cookie = t + "=; path=/; expires=" + e.toUTCString()
    }
    var n = {}
      , o = null;
    n.inform = function() {
        t("inform", arguments)
    }
    ,
    n.dialog = function() {
        t("dialog", arguments)
    }
    ,
    n.jumpTo = function() {
        t("jumpTo", arguments)
    }
    ,
    n.selectWmPoi = function() {
        t("selectWmPoi", arguments)
    }
    ,
    n.getPlatformShareData = function() {
        return o
    }
    ,
    n.signContract = function() {
        t("signContract", arguments)
    }
    ;
    var a = function() {
        e("token"),
        e("acctId"),
        e("wmPoiId"),
        e("_source")
    }
      , r = function(t) {
        o = t
    }
      , i = function(t) {
        var e, n = t.selector;
        n && (e = $(n)),
        e.size() > 0 && null != t.content && e.text(t.content)
    }
      , c = {
        push: [],
        logout: [a],
        platformShareData: [r],
        changeDomShow: [i]
    };
    return n.addMessageHandler = function(t, e) {
        c[t].push(e)
    }
    ,
    n.removeMessageHandler = function(t, e) {
        var n = c[t];
        if (n && n.length > 0)
            for (var o = 0; o < n.length; o++)
                if (e === n[o]) {
                    n.splice(o, 1);
                    break
                }
    }
    ,
    window.addEventListener("message", function(t) {
        var e;
        try {
            e = JSON.parse(t.data);
            var n = c[e.type];
            if (n && n.length > 0)
                for (var o = 0; o < n.length; o++) {
                    var a = n[o].call(null, e.data);
                    if (a === !1)
                        break
                }
        } catch (r) {
            console.log(r)
        }
    }),
    t("getPlatformShareData"),
    n
});
define('module/general', ["module/interface", "util/ubl", "module/sys_api", "module/ajax_util", "module/page_jump", "module/bridge/bridge_app"], function(e, t, a) {
    parent.postMessage("同源子域", "*"),
    window.UBL = t;
    for (var n = $(".standard-tab a").get(), i = 0; i < n.length; i++)
        n[i].addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.getAttribute("href");
            t && (parent.document.location.hash = t)
        })
});
define('util/code', [], function() {
    return new function() {
        this.allASCII = function(r) {
            if (!r)
                return !1;
            for (var e = 0, t = r.length; t > e; e++) {
                var n = r.charCodeAt(e);
                if (n >= 256)
                    return !1
            }
            return !0
        }
        ,
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        this.base64Encode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = _utf8_encode(r); d < r.length; )
                e = r.charCodeAt(d++),
                t = r.charCodeAt(d++),
                n = r.charCodeAt(d++),
                o = e >> 2,
                a = (3 & e) << 4 | t >> 4,
                c = (15 & t) << 2 | n >> 6,
                f = 63 & n,
                isNaN(t) ? c = f = 64 : isNaN(n) && (f = 64),
                h = h + _keyStr.charAt(o) + _keyStr.charAt(a) + _keyStr.charAt(c) + _keyStr.charAt(f);
            return h
        }
        ,
        this.base64Decode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length; )
                o = _keyStr.indexOf(r.charAt(d++)),
                a = _keyStr.indexOf(r.charAt(d++)),
                c = _keyStr.indexOf(r.charAt(d++)),
                f = _keyStr.indexOf(r.charAt(d++)),
                e = o << 2 | a >> 4,
                t = (15 & a) << 4 | c >> 2,
                n = (3 & c) << 6 | f,
                h += String.fromCharCode(e),
                64 != c && (h += String.fromCharCode(t)),
                64 != f && (h += String.fromCharCode(n));
            return h = _utf8_decode(h)
        }
        ,
        _utf8_encode = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var e = "", t = 0; t < r.length; t++) {
                var n = r.charCodeAt(t);
                128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192),
                e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224),
                e += String.fromCharCode(n >> 6 & 63 | 128),
                e += String.fromCharCode(63 & n | 128))
            }
            return e
        }
        ,
        _utf8_decode = function(r) {
            for (var e = "", t = 0, n = c1 = c2 = 0; t < r.length; )
                n = r.charCodeAt(t),
                128 > n ? (e += String.fromCharCode(n),
                t++) : n > 191 && 224 > n ? (c2 = r.charCodeAt(t + 1),
                e += String.fromCharCode((31 & n) << 6 | 63 & c2),
                t += 2) : (c2 = r.charCodeAt(t + 1),
                c3 = r.charCodeAt(t + 2),
                e += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                t += 3);
            return e
        }
    }
});
define('module/printer_33', ["util/code"], function(utils) {
    function WmPrinter() {
        function _WmPrinterWrapper(t) {
            function n(t) {
                var n = t ? "array" == typeof t ? t : t.split(",") : []
                  , r = [];
                for (var e in n)
                    r.push(n[e].trim());
                return r
            }
            function r(t) {
                var n = {}
                  , r = [];
                for (var e in t) {
                    var i = t[e].toUpperCase();
                    switch (i) {
                    case "L":
                    case "R":
                    case "C":
                        n.align = i;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        n.vAlign = i;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        var s = [n.font, i].join(",");
                        "DH,DW" == s || "DW,DH" == s ? n.font = "DHW" : ("DHW" != n.font || "DH" != i && "DW" != i) && (n.font = i);
                        break;
                    default:
                        r.push(i)
                    }
                }
                return n.align && r.push(n.align),
                n.vAlign && r.push(n.vAlign),
                n.font && r.push(n.font),
                r
            }
            function e(t) {
                function e(t) {
                    switch (t) {
                    case "L":
                    case "R":
                    case "C":
                        o != t && i.push(o = t),
                        s = !0;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        u != t && i.push(u = t),
                        a = !0;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        f != t && i.push(f = t),
                        c = !0;
                        break;
                    case "PRINT":
                        l = !0,
                        i.push(t);
                        break;
                    default:
                        i.push(t)
                    }
                }
                "string" == typeof t && (t = n(t));
                var i = []
                  , s = !1
                  , a = !1
                  , c = !1;
                t = r(t);
                for (var h in t)
                    e(t[h]);
                return !s && l && e("L"),
                !a && l && e("B"),
                c || e("CHW"),
                l = !1,
                i
            }
            var i, a = t, o = "L", u = "B", f = "CHW", c = !1, l = !1;
            this.prop = function(t) {
                return a.prop(t)
            }
            ,
            this.infos = function(t) {
                return t ? a.infos[t] : a.infos
            }
            ,
            this.width = function() {
                return this.prop("width")
            }
            ,
            this.name = function() {
                return this.prop("name")
            }
            ,
            this.key = function() {
                return a.key
            }
            ,
            this.flag = function() {
                return a.flag()
            }
            ,
            this.open = function() {
                return a.open()
            }
            ,
            this.close = function() {
                return a.close()
            }
            ,
            this.write = function(t, n) {
                return a.write ? a.write(t, n) : !1
            }
            ,
            this.canWrite = function() {
                return !!a.write
            }
            ,
            this.type = function() {
                return a.type
            }
            ,
            this.set = function(t) {
                a.set && a.set(t)
            }
            ,
            this.test = function(t) {
                if (void 0 !== i && !t)
                    return i;
                if (a.test)
                    return i = a.test().success;
                if (!this.open())
                    return !1;
                try {
                    return i = this.init()
                } catch (n) {
                    return !1
                } finally {
                    this.close()
                }
            }
            ,
            this.init = function(t) {
                if (t) {
                    var n = t.pageWidth || 0
                      , r = _self.charWidthOfPageWidth(n) || this.width()
                      , e = {
                        pageWidth: n,
                        charWidth: r,
                        cmdModel: t.cmdModel,
                        orderType: t.orderType
                    };
                    t.font && (e.font = utils.base64Decode(t.font)),
                    this.set(e)
                }
                var i = a.init();
                return c = !1,
                l = !1,
                o = "L",
                u = "B",
                f = "CHW",
                i.success
            }
            ,
            this.unknown = function() {
                return a.unknown ? a.unknown() : !1
            }
            ,
            this.pageEnd = function(t) {
                a.pageEnd && a.pageEnd(t)
            }
            ,
            this.cmd = function(t, r) {
                for (var i = null !== r && void 0 != r ? n : e, s = i(t), o = 0, u = s.length; u > o; o++)
                    a.cmd(s[o], r);
                return this
            }
            ,
            this.pt = function(t, n) {
                return this.cmd(n),
                !String.empty(t) && (a.data(t),
                c = !1),
                this
            }
            ,
            this.ptf = function(t) {
                var n = -1
                  , r = Array.clone(arguments)
                  , e = r.length;
                r.push(function(t, r) {
                    n = Math.max(n, t)
                });
                var i = String.format.apply(null, r);
                return this.pt(i, e - 1 > n ? r[e - 1] : void 0)
            }
            ,
            this.ptl = function(t, n) {
                return this.pt(t, n),
                this.cmd("PRINT")
            }
            ,
            this.ptfl = function(t) {
                return this.ptf.apply(this, arguments),
                this.ptl()
            }
            ,
            this.pts = function(t, n, r) {
                n || (n = this.width()),
                1 > n && (n = parseInt(this.width() * n)),
                "object" != typeof t && (t = {
                    "char": (t || "-").toString(),
                    text: "",
                    align: "C"
                });
                var e = t["char"] || "-"
                  , i = t.text || ""
                  , a = t.align || "C";
                if (i && i.length) {
                    var o = i.width();
                    o >= n ? s = i : "L" == a ? s = i.fill(n, e) : "R" == a ? s = i.fill(-n, e) : s = i.fill(-((n - o) / 2 + o), e).fill(n, e)
                } else
                    s = "".fill(n, e);
                return this.pt(s, r)
            }
            ,
            this.ptsl = function(t, n, r) {
                return this.pts(t, n, r),
                c = !0,
                this.ptl()
            }
            ,
            this.ptsli = function(t, n, r) {
                return c || this.ptsl(t, n, r),
                this
            }
            ,
            this.ptqc = function(t, n) {
                return t || (t = ""),
                n || (n = 5),
                n = Math.min(Math.max(1, n), 16),
                t.length > 124 && (t = t.substr(0, 124)),
                this.cmd("QC_SIZE", n),
                this.cmd("QC_LEN", t.length),
                this.pt(t),
                this.cmd("QC_PRINT"),
                this
            }
            ,
            this.cut = function() {
                this.cmd("CUT")
            }
        }
        function _getUdVpids() {
            return _udVpids || (_udVpids = {},
            $(_pt.getUserDefineUsbPrinterFlags()).each(function() {
                _udVpids[this.vpid.toUpperCase()] = this
            })),
            _udVpids
        }
        function _isUsbPrinter(t, n) {
            var r = _flagToKey(n)
              , e = _getUdVpids()
              , i = e[r];
            return i && (String.empty(i.service) || i.service.toLowerCase() == t) ? (!_allProps[r] && (_allProps[r] = {}),
            !String.empty(i.name) && (_allProps[r].name = i.name),
            !0) : _self.containts(n) && t && t.indexOf("libusb") >= 0 || "usbprint" == t
        }
        function _refresh() {
            var t = {}
              , n = _pt && _pt.getUsbDevices();
            n && n.success && $(n.devices).each(function(n, r) {
                var e = (r.infos.SERVICE || "").toLowerCase()
                  , i = {
                    vid: r.vid,
                    pid: r.pid
                };
                if (i.toString = function() {
                    return _flagToKey(i)
                }
                ,
                _isUsbPrinter(e, i)) {
                    var s, a = _all ? _all[r.key] : null, o = r.init;
                    a || (a = new _WmPrinterWrapper(r),
                    r.init = function() {
                        var t = o ? o.call(r, _self.getCmd(i, "INIT"), 2e3) : r.cmd("INIT");
                        return t && t.success && r.cmd("ENCODING", "chs"),
                        t
                    }
                    ,
                    r.set = function(t) {
                        s = t
                    }
                    ,
                    r.cmd = function(t, n) {
                        var e = _self.getCmd(i, t, n, s && s.cmdModel);
                        return !String.empty(e) && r.write(e)
                    }
                    ,
                    r.data = function(t) {
                        return !String.empty(t) && r.write(t)
                    }
                    ,
                    r.prop = function(t) {
                        return _self.getProp(i, t)
                    }
                    ,
                    r.flag = function() {
                        return i
                    }
                    ,
                    r.unknown = function() {
                        return !_self.containts(i)
                    }
                    ,
                    r.pageEnd = function(t) {
                        t = t || 4;
                        for (var n = 0, r = Math.max(0, t - 3); t > n; n++)
                            n == r ? a.ptsl("  .      ") : a.ptl();
                        a.cmd("CUT")
                    }
                    ),
                    t[a.key()] = a
                }
            });
            var r = _pt && _pt.getGdiPrinters();
            r && r.success && $(r.printers).each(function(n, r) {
                try {
                    r.key = _appInfo && _appInfo.code > 32 ? decodeURIComponent(r.key.replace(/\+/g, " ")) : r.key
                } catch (e) {}
                utils.allASCII(r.key) || (r.key = utils.base64Encode(r.key));
                var i = _all ? _all[r.key] : null;
                i || (i = new _WmPrinterWrapper(r),
                r.prop = function(t) {
                    switch (t) {
                    case "name":
                        return r.name || "";
                    case "width":
                        return 32
                    }
                    return void 0
                }
                ,
                r.infos.name || (r.infos.name = this.name),
                r.flag = function() {
                    return null
                }
                ,
                r.pageEnd = function() {
                    i.cmd("CUT")
                }
                ),
                t[i.key()] = i
            }),
            _all = t
        }
        function _allPrinters(t) {
            return (!_all || t) && _refresh(),
            _all
        }
        function _first(t, n) {
            var r;
            return $(t).each(function(t, e) {
                return n.call(e, t, e) ? (r = e,
                !1) : void 0
            }),
            r
        }
        function _findDefaultPinter(t) {
            var n = _first(t, function(t, n) {
                return "usb" == n.type() && n.test()
            });
            if (n)
                return n;
            var r = _pt && _pt.getDefaultPrinter()
              , n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.name() == r && n.test()
            });
            if (n)
                return n;
            var n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.test()
            });
            return n
        }
        function _char(t) {
            return String.fromCharCode([parseInt(t)])
        }
        function _charOfEncoding(t) {
            var n = {
                chs: 15
            }
              , r = n[t];
            return void 0 === r && (r = 15),
            _char(r)
        }
        function _flagToKey(t) {
            return t.vid.toString(16).fill(-4, "0").toUpperCase() + "-" + t.pid.toString(16).fill(-4, "0").toUpperCase()
        }
        var _all = null, _self = this, _udVpids;
        this.refresh = _refresh,
        this.getDefaultPrinter = function(t) {
            return _findDefaultPinter(this.allPrinters(t))
        }
        ,
        this.getPrinters = function(t, n) {
            var r = this.settings
              , e = r.getSettings(t, !0);
            !e.useModel && "-1" != t && (e = r.getSettings("-1", !0),
            t = "-1");
            var i = []
              , s = this.allPrinters(n);
            if (n && _refresh(),
            0 == e.model) {
                var a = _findDefaultPinter(s);
                a && i.push(a)
            } else
                $(s).each(function(n, e) {
                    var s = r.getPrinterSetting(t, e.key(), !0);
                    s && s.enable && i.push(e)
                });
            return i
        }
        ,
        this.anyPrinter = function(t) {
            var n = _allPrinters(t)
              , r = null;
            for (var e in n) {
                var i = n[e];
                if (i.test()) {
                    if (_self.containts(i.flag()))
                        return i;
                    r || (r = i)
                }
            }
            return r
        }
        ,
        this.allPrinters = function(t) {
            var n = []
              , r = _allPrinters(t);
            for (var e in r)
                n.push(r[e]);
            return n
        }
        ,
        this.allCmdModels = function() {
            var t = [];
            for (var n in _allProps) {
                var r = _allProps[n];
                r.title && (r.name = n,
                t.push(r))
            }
            return t
        }
        ,
        this.settings = new function() {
            function t(t) {
                try {
                    return JSON.parse(t)
                } catch (n) {
                    return null
                }
            }
            function n(t) {
                return JSON.parse(JSON.stringify(t))
            }
            function r(t) {
                for (var n in t)
                    return t[k]
            }
            function e(t) {
                function n(n, r) {
                    void 0 === t[n] && (t[n] = r)
                }
                n("orderCount", 1),
                n("orderInterval", 1),
                n("inshopCount", 1),
                n("inshopInterval", 1),
                n("inshopAutoPrint", !0),
                n("pageWidth", 0),
                n("cmdModel", "default"),
                n("orderType", "default")
            }
            function i() {
                if (!s) {
                    var i, o = _sys && _sys.getStorage(a);
                    if (!o || !(i = t(o))) {
                        var u = {};
                        $(_pt && _pt.allPrinterSettings()).each(function() {
                            u[this.id] = this
                        }),
                        i = {
                            "-1": {
                                list: u || {},
                                model: _pt && _pt.getPrinterModel(),
                                useModel: 0
                            }
                        },
                        _sys && _sys.setStorage(a, JSON.stringify(i))
                    }
                    i[-1] || (i[-1] = n(r(i) || {
                        "-1": {
                            list: {},
                            model: 0,
                            useModel: 0
                        }
                    })),
                    $(i).each(function(t) {
                        $(this.list).each(function() {
                            e(this)
                        })
                    }),
                    s = i
                }
                return s
            }
            var s, a = "printer_settings";
            this.allSettings = function() {
                return i()
            }
            ,
            this.getSettings = function(t, r) {
                var e = i()
                  , s = e[t];
                return !s && r && (e[t] = s = n(e[-1])),
                s
            }
            ,
            this.newDefPrintSetting = function(t) {
                var n = {
                    id: t,
                    enable: !1
                };
                return e(n),
                n
            }
            ,
            this.getPrinterSetting = function(t, n, r) {
                var e = this.getSettings(t, r);
                if (e) {
                    var i = e.list[n];
                    return !i && r && (e.list[n] = i = this.newDefPrintSetting(n)),
                    i
                }
                return null
            }
            ,
            this.save = function() {
                if (s) {
                    _sys && _sys.setStorage(a, JSON.stringify(s));
                    var t = this.getSettings("-1");
                    t && ($(t.list).each(function() {
                        _pt.setPrinterSetting(this.id, this)
                    }),
                    _pt.setPrinterModel(t.model))
                }
            }
            ,
            this.reload = function() {
                s = null
            }
        }
        ;
        var _allProps = {
            "default": {
                title: "默认",
                commands: {
                    ENCODING: function(t) {
                        return "R" + _char(t)
                    },
                    NOP_STOP: function(t) {
                        return "c4" + _char(void 0 === t ? 1 : t)
                    },
                    INIT: "@",
                    PRINT: "\n",
                    L: "a\x00",
                    C: "a",
                    R: "a",
                    DH: "!",
                    DW: "! ",
                    DHW: "!0",
                    CHW: "!\x00",
                    CUT: "i",
                    QC_SIZE: function(t) {
                        return "(k\x001C" + _char(t)
                    },
                    QC_LEN: function(t) {
                        return "(k" + _char(t + 3 & 255) + _char(t + 3 >> 8) + "1P0"
                    },
                    QC_PRINT: "(k\x001Q0"
                },
                width: 32,
                name: "USB打印机",
                endsWith: "\x00"
            },
            "default-2": {
                title: "方案二",
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                }
            },
            "067B-2305": {
                commands: {
                    ENCODING: "",
                    NOP_STOP: "",
                    L: "",
                    C: "",
                    R: ""
                },
                name: "爱宝打印机",
                endsWith: null
            },
            "0416-5011": {
                name: "浩顺打印机"
            },
            "6868-0300": {
                name: "佳博打印机"
            },
            "1A86-7584": {
                name: "佳博打印机"
            },
            "1CBE-0002": {
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                },
                name: "佳博打印机"
            }
        }
          , _defProp = _allProps["default"];
        if (this.containts = function(t) {
            return t && !!_allProps[_flagToKey(t)]
        }
        ,
        this.getProp = function(t, n, r) {
            var e = r && "default" != r && _allProps[r] ? r : t ? _flagToKey(t) : "default"
              , i = _allProps[e] || _defProp;
            return n ? void 0 !== i[n] ? i[n] : _defProp[n] : i
        }
        ,
        this.getCmd = function(t, n, r, e) {
            var i = this.getProp(t, "commands", e)[n]
              , s = void 0 !== i ? i : this.getProp(null, "commands")[n];
            if (s = "function" == typeof s ? s(r) : s,
            !String.empty(s)) {
                var a = this.getProp(t, "endsWith");
                "string" == typeof a && (s += a)
            }
            return s
        }
        ,
        this.printTestPage = function() {
            var t = printer.getPrinter(!0);
            if (!t)
                return void alert("当前尚未连接打印机");
            if (!t.open())
                return void alert("打印机连接失败");
            try {
                t.init(),
                t.ptl("美团打印机测试页", "DHW"),
                t.close()
            } catch (n) {
                alert(n)
            }
        }
        ,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
        ,
        _sys && _sys.readFile)
            try {
                eval(_sys.readFile("printer.js"))
            } catch (e) {}
    }
    var _nt = window.wmNetworkApi
      , _sys = window.wmSystemApi
      , _pt = window.wmPrinterApi
      , _appInfo = _sys && _sys.getAppInfo && _sys.getAppInfo();
    return String.prototype.width = function() {
        for (var t = this, n = 0, r = 0, e = t.length; e > r; r++) {
            var i = t.charCodeAt(r);
            n += i >= 256 ? 2 : 1
        }
        return n
    }
    ,
    String.prototype.fill = function(t, n) {
        var r = this
          , e = r.width();
        if (!t || e >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > e; )
                if (t >= e + i)
                    r += n,
                    e += i;
                else
                    for (var s = 0, a = n.length; a > s; s++) {
                        var o = n.charAt(s)
                          , u = o.width();
                        if (!(t >= e + u))
                            break t;
                        r += o,
                        e += u
                    }
        } else
            r = "".fill(-t - e, n) + r;
        return r
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , r = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var e in t)
            t[e] && (n += r + e + "=" + t[e],
            r = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone(arguments)
          , r = n[n.length - 1]
          , e = r instanceof Function ? (n.length--,
        r) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, r, i, s, a) {
            function o(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var u = o(n[r = parseInt(r) + 1], "").toString();
            return a && (u = u.fill(parseInt((i || "") + a), s ? s : " ")),
            e(r, a),
            u
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], r = 0, e = t.length; e > r; r++)
            n.push(t[r]);
        return n
    }
    ,
    Array.join = function(t, n, r) {
        var e = "";
        for (var i in t) {
            var s = t[i];
            r && !String.empty(s) && (e.length && (e += n),
            e += s)
        }
        return e
    }
    ,
    new WmPrinter
});
define('module/printer', ["util/code", "module/printer_33"], function(t, n) {
    function e() {
        function t(t, n) {
            var e;
            return $(t).each(function(t, r) {
                return n.call(r, t, r) ? (e = r,
                !1) : void 0
            }),
            e
        }
        function n(n) {
            var e = t(n, function(t, n) {
                return "usb" == n.type
            });
            if (e)
                return e;
            var i = r.getDefaultPrinter()
              , o = i && i.name
              , e = t(n, function(t, n) {
                return "printer" == n.type && n.name == o
            });
            if (e)
                return e;
            var e = t(n, function(t, n) {
                return "printer" == n.type
            });
            return e
        }
        this.refresh = function() {}
        ,
        this.getDefaultPrinter = function(t) {
            return n(this.allPrinters())
        }
        ,
        this.getPrinters = function(t, e) {
            var r = this.settings
              , i = r.getSettings(t, !0);
            !i.useModel && "-1" != t && (i = r.getSettings("-1", !0),
            t = "-1");
            var o = []
              , s = this.allPrinters();
            if (0 == i.model) {
                var u = n(s);
                u && o.push(u)
            } else
                $(s).each(function(n, e) {
                    var i = r.getPrinterSetting(t, e.id, !0);
                    i && i.enable && o.push(e)
                });
            return o
        }
        ,
        this.allPrinters = function() {
            return wmPrinterApi.getAllPrinters()
        }
        ,
        this.settings = new s,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
    }
    var r = window.wmPrinterApi
      , i = window.wmSystemApi
      , o = (window.wmNetworkApi,
    i && i.getAppInfo && i.getAppInfo());
    if (o && o.code < 4e3)
        return n;
    var s = function() {
        function t() {
            this._settings = null,
            this._settingsKey = "printer_settings"
        }
        var n = window.wmPrinterApi
          , e = window.wmSystemApi;
        window.wmNetworkApi;
        return t.prototype.jsonParse = function(t) {
            try {
                return JSON.parse(t)
            } catch (n) {
                return null
            }
        }
        ,
        t.prototype.clone = function(t) {
            return JSON.parse(JSON.stringify(t))
        }
        ,
        t.prototype._setPrintDef = function(t) {
            function n(n, e) {
                void 0 === t[n] && (t[n] = e)
            }
            n("orderCount", 1),
            n("orderInterval", 1),
            n("inshopCount", 1),
            n("inshopInterval", 1),
            n("inshopAutoPrint", !0),
            n("pageWidth", 0),
            n("cmdModel", "default"),
            n("orderType", "default")
        }
        ,
        t.prototype._getSettings = function() {
            if (!this._settings) {
                var t = e.getStorage(this._settingsKey) || ""
                  , n = this.jsonParse(t);
                (0 == t.length || null == n) && (n = {
                    "-1": this.createSettingPoi()
                },
                e.setStorage(this._settingsKey, JSON.stringify(n))),
                void 0 == n[-1] && (n[-1] = this.createSettingPoi()),
                this._settings = n
            }
            return this._settings
        }
        ,
        t.prototype.createSettingPoi = function() {
            return {
                list: {},
                model: 0,
                useModel: 0
            }
        }
        ,
        t.prototype.allSettings = function() {
            return this._getSettings()
        }
        ,
        t.prototype.getSettings = function(t, n) {
            void 0 === n && (n = !1);
            var e = this._getSettings()
              , r = e[t];
            return void 0 == r && n && (r = this.clone(e[-1]),
            e[t] = r),
            r
        }
        ,
        t.prototype.newDefPrintSetting = function(t) {
            var n = {
                id: t,
                enable: !1
            };
            return this._setPrintDef(n),
            n
        }
        ,
        t.prototype.getPrinterSetting = function(t, n, e) {
            var r = this.getSettings(t, e);
            if (r) {
                var i = r.list[n];
                return !i && e && (i = this.newDefPrintSetting(n),
                r.list[n] = i),
                i
            }
            return null
        }
        ,
        t.prototype.save = function() {
            if (this._settings) {
                e.setStorage(this._settingsKey, JSON.stringify(this._settings));
                var t = this.getSettings("-1");
                t && n.setPrinterModel(t.model)
            }
        }
        ,
        t.prototype.reload = function() {
            this._settings = null
        }
        ,
        t
    }();
    return String.prototype.width = function() {
        for (var t = this, n = 0, e = 0, r = t.length; r > e; e++) {
            var i = t.charCodeAt(e);
            n += i >= 256 ? 2 : 1
        }
        return "".indexOf,
        n
    }
    ,
    String.prototype.fill = function(t, n) {
        var e = this
          , r = e.width();
        if (!t || r >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > r; )
                if (t >= r + i)
                    e += n,
                    r += i;
                else
                    for (var o = 0, s = n.length; s > o; o++) {
                        var u = n.charAt(o)
                          , a = u.width();
                        if (!(t >= r + a))
                            break t;
                        e += u,
                        r += a
                    }
        } else
            e = "".fill(-t - r, n) + e;
        return e
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , e = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var r in t)
            t[r] && (n += e + r + "=" + t[r],
            e = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone([].slice.call(arguments))
          , e = n[n.length - 1]
          , r = e instanceof Function ? (n.length--,
        e) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, e, i, o, s) {
            function u(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var a = u(n[e = parseInt(e) + 1], "").toString();
            return s && (a = a.fill(parseInt((i || "") + s), o ? o : " ")),
            r(e, s),
            a
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], e = 0, r = t.length; r > e; e++)
            n.push(t[e]);
        return n
    }
    ,
    Array.join = function(t, n, e) {
        var r = "";
        for (var i in t) {
            var o = t[i];
            e && !String.empty(o) && (r.length && (r += n),
            r += o)
        }
        return r
    }
    ,
    new e
});
(function defineMustache(global, factory) {
    if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
        factory(exports)
    } else if (typeof define === "function" && define.amd) {
        define('lib/mustache.min', ["exports"], factory)
    } else {
        global.Mustache = {};
        factory(global.Mustache)
    }
}
)(this, function mustacheFactory(mustache) {
    var objectToString = Object.prototype.toString;
    var isArray = Array.isArray || function isArrayPolyfill(object) {
        return objectToString.call(object) === "[object Array]"
    }
    ;
    function isFunction(object) {
        return typeof object === "function"
    }
    function typeStr(obj) {
        return isArray(obj) ? "array" : typeof obj
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function hasProperty(obj, propName) {
        return obj != null && typeof obj === "object" && propName in obj
    }
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
        return regExpTest.call(re, string)
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string)
    }
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
            return entityMap[s]
        })
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
        if (!template)
            return [];
        var sections = [];
        var tokens = [];
        var spaces = [];
        var hasTag = false;
        var nonSpace = false;
        function stripSpace() {
            if (hasTag && !nonSpace) {
                while (spaces.length)
                    delete tokens[spaces.pop()]
            } else {
                spaces = []
            }
            hasTag = false;
            nonSpace = false
        }
        var openingTagRe, closingTagRe, closingCurlyRe;
        function compileTags(tagsToCompile) {
            if (typeof tagsToCompile === "string")
                tagsToCompile = tagsToCompile.split(spaceRe, 2);
            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
                throw new Error("Invalid tags: " + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
            closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
            closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
        }
        compileTags(tags || mustache.tags);
        var scanner = new Scanner(template);
        var start, type, value, chr, token, openSection;
        while (!scanner.eos()) {
            start = scanner.pos;
            value = scanner.scanUntil(openingTagRe);
            if (value) {
                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
                    chr = value.charAt(i);
                    if (isWhitespace(chr)) {
                        spaces.push(tokens.length)
                    } else {
                        nonSpace = true
                    }
                    tokens.push(["text", chr, start, start + 1]);
                    start += 1;
                    if (chr === "\n")
                        stripSpace()
                }
            }
            if (!scanner.scan(openingTagRe))
                break;
            hasTag = true;
            type = scanner.scan(tagRe) || "name";
            scanner.scan(whiteRe);
            if (type === "=") {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe)
            } else if (type === "{") {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = "&"
            } else {
                value = scanner.scanUntil(closingTagRe)
            }
            if (!scanner.scan(closingTagRe))
                throw new Error("Unclosed tag at " + scanner.pos);
            token = [type, value, start, scanner.pos];
            tokens.push(token);
            if (type === "#" || type === "^") {
                sections.push(token)
            } else if (type === "/") {
                openSection = sections.pop();
                if (!openSection)
                    throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value)
                    throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
            } else if (type === "name" || type === "{" || type === "&") {
                nonSpace = true
            } else if (type === "=") {
                compileTags(value)
            }
        }
        openSection = sections.pop();
        if (openSection)
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens))
    }
    function squashTokens(tokens) {
        var squashedTokens = [];
        var token, lastToken;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            if (token) {
                if (token[0] === "text" && lastToken && lastToken[0] === "text") {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3]
                } else {
                    squashedTokens.push(token);
                    lastToken = token
                }
            }
        }
        return squashedTokens
    }
    function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];
        var token, section;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            switch (token[0]) {
            case "#":
            case "^":
                collector.push(token);
                sections.push(token);
                collector = token[4] = [];
                break;
            case "/":
                section = sections.pop();
                section[5] = token[2];
                collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                break;
            default:
                collector.push(token)
            }
        }
        return nestedTokens
    }
    function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0
    }
    Scanner.prototype.eos = function eos() {
        return this.tail === ""
    }
    ;
    Scanner.prototype.scan = function scan(re) {
        var match = this.tail.match(re);
        if (!match || match.index !== 0)
            return "";
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string
    }
    ;
    Scanner.prototype.scanUntil = function scanUntil(re) {
        var index = this.tail.search(re), match;
        switch (index) {
        case -1:
            match = this.tail;
            this.tail = "";
            break;
        case 0:
            match = "";
            break;
        default:
            match = this.tail.substring(0, index);
            this.tail = this.tail.substring(index)
        }
        this.pos += match.length;
        return match
    }
    ;
    function Context(view, parentContext) {
        this.view = view;
        this.cache = {
            ".": this.view
        };
        this.parent = parentContext
    }
    Context.prototype.push = function push(view) {
        return new Context(view,this)
    }
    ;
    Context.prototype.lookup = function lookup(name) {
        var cache = this.cache;
        var value;
        if (cache.hasOwnProperty(name)) {
            value = cache[name]
        } else {
            var context = this, names, index, lookupHit = false;
            while (context) {
                if (name.indexOf(".") > 0) {
                    value = context.view;
                    names = name.split(".");
                    index = 0;
                    while (value != null && index < names.length) {
                        if (index === names.length - 1)
                            lookupHit = hasProperty(value, names[index]);
                        value = value[names[index++]]
                    }
                } else {
                    value = context.view[name];
                    lookupHit = hasProperty(context.view, name)
                }
                if (lookupHit)
                    break;
                context = context.parent
            }
            cache[name] = value
        }
        if (isFunction(value))
            value = value.call(this.view);
        return value
    }
    ;
    function Writer() {
        this.cache = {}
    }
    Writer.prototype.clearCache = function clearCache() {
        this.cache = {}
    }
    ;
    Writer.prototype.parse = function parse(template, tags) {
        var cache = this.cache;
        var tokens = cache[template];
        if (tokens == null)
            tokens = cache[template] = parseTemplate(template, tags);
        return tokens
    }
    ;
    Writer.prototype.render = function render(template, view, partials) {
        var tokens = this.parse(template);
        var context = view instanceof Context ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template)
    }
    ;
    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
        var buffer = "";
        var token, symbol, value;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === "#")
                value = this.renderSection(token, context, partials, originalTemplate);
            else if (symbol === "^")
                value = this.renderInverted(token, context, partials, originalTemplate);
            else if (symbol === ">")
                value = this.renderPartial(token, context, partials, originalTemplate);
            else if (symbol === "&")
                value = this.unescapedValue(token, context);
            else if (symbol === "name")
                value = this.escapedValue(token, context);
            else if (symbol === "text")
                value = this.rawValue(token);
            if (value !== undefined)
                buffer += value
        }
        return buffer
    }
    ;
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
        var self = this;
        var buffer = "";
        var value = context.lookup(token[1]);
        function subRender(template) {
            return self.render(template, context, partials)
        }
        if (!value)
            return;
        if (isArray(value)) {
            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate)
            }
        } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate)
        } else if (isFunction(value)) {
            if (typeof originalTemplate !== "string")
                throw new Error("Cannot use higher-order sections without the original template");
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null)
                buffer += value
        } else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate)
        }
        return buffer
    }
    ;
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
        var value = context.lookup(token[1]);
        if (!value || isArray(value) && value.length === 0)
            return this.renderTokens(token[4], context, partials, originalTemplate)
    }
    ;
    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
        if (!partials)
            return;
        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null)
            return this.renderTokens(this.parse(value), context, partials, value)
    }
    ;
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null)
            return value
    }
    ;
    Writer.prototype.escapedValue = function escapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null)
            return mustache.escape(value)
    }
    ;
    Writer.prototype.rawValue = function rawValue(token) {
        return token[1]
    }
    ;
    mustache.name = "mustache.js";
    mustache.version = "2.2.1";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer;
    mustache.clearCache = function clearCache() {
        return defaultWriter.clearCache()
    }
    ;
    mustache.parse = function parse(template, tags) {
        return defaultWriter.parse(template, tags)
    }
    ;
    mustache.render = function render(template, view, partials) {
        if (typeof template !== "string") {
            throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)")
        }
        return defaultWriter.render(template, view, partials)
    }
    ;
    mustache.to_html = function to_html(template, view, partials, send) {
        var result = mustache.render(template, view, partials);
        if (isFunction(send)) {
            send(result)
        } else {
            return result
        }
    }
    ;
    mustache.escape = escapeHtml;
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer
});
define('module/order/printorder_parser', ["lib/mustache.min", "module/printer", "util/utils"], function(e, t, r) {
    var n = function(e, t) {
        for (var r = [], t = Math.floor(t); t-- > 0; )
            r.push(e);
        return r.join("")
    }
      , a = function(e) {
        return e % 2 === 1 ? !0 : !1
    }
      , i = function(e) {
        for (var t = len = e.length, r = 0; r < len; r++)
            e.charCodeAt(r) >= 255 && t++;
        return t
    }
      , o = function(e, t) {
        for (var r = 0, n = e.length, a = 0; n > a && (r += e.charCodeAt(a) >= 255 ? 2 : 1,
        !(r > t)); a++)
            ;
        return [e.substr(0, a), e.substr(a)]
    }
      , l = {
        _alignStyle: {
            left: "L",
            center: "C",
            right: "R"
        },
        _fontStyle: {
            B: "DHW",
            W: "DW",
            H: "DH",
            D: "CHW"
        },
        _getXmlDoc: function(e) {
            var t, r, n = e.replace(/(&nbsp;|nbsp;)/g, CommConstants.IS_NEW_APP ? " " : "/blank");
            return window.DOMParser ? (t = new DOMParser,
            r = t.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(n)),
            r
        },
        _ifLeafNode: function(e) {
            var t = e.childNodes
              , r = t.length;
            return 0 === r ? !0 : !1
        },
        _printNode: function(e, t, r) {
            switch (e.nodeName) {
            case "br":
                t.ptl("\n");
                break;
            case "line":
                t.ptsl(e.getAttribute("chars") || "-", r);
                break;
            case "div":
                var l = []
                  , s = e.getAttribute("align")
                  , d = e.getAttribute("font");
                if (s ? l.push(this._alignStyle[s]) : "",
                d ? l.push(this._fontStyle[d]) : "",
                !this._ifLeafNode(e)) {
                    for (var u = e.childNodes, f = u.length, c = [], h = 0; f > h; h++)
                        ("span" === u[h].nodeName && u[h].childNodes.length > 0 || "#text" === u[h].nodeName && "" !== $.trim(u[h].nodeValue)) && c.push(u[h]);
                    f = c.length;
                    for (var h = 0; f > h; h++)
                        if ("span" === c[h].nodeName) {
                            var g = c[h].getAttribute("font")
                              , p = g ? l.concat(this._fontStyle[g]) : l
                              , m = g ? this._fontStyle[g] : ""
                              , v = $.trim(c[h].childNodes[0].nodeValue).replace(/\/blank/g, " ");
                            h === f - 1 ? t.ptl(v, p.join(",")) : t.pt(v, m)
                        } else if ("#text" === c[h].nodeName) {
                            var v = $.trim(c[h].nodeValue);
                            h === f - 1 ? t.ptl(v, l.join(",")) : t.pt(v)
                        }
                }
                break;
            case "tr":
                for (var d = e.getAttribute("font"), d = d ? this._fontStyle[d] : "", N = [], u = e.childNodes, f = u.length, h = 0; f > h; h++)
                    if ("td" === u[h].nodeName) {
                        var b = u[h].getAttribute("width") * r / 32
                          , _ = u[h].getAttribute("align")
                          , w = u[h].childNodes.length > 0 && u[h].childNodes[0].nodeValue ? u[h].childNodes[0].nodeValue.replace(/[\s\r\n]/g, "") : "";
                        N.push({
                            value: w,
                            width: "DHW" === d || "DW" === d ? Math.round(b / 2) : Math.round(b),
                            align: _ ? _ : "left"
                        })
                    }
                for (var A = N.length; ; ) {
                    for (var h = 0; A > h; h++) {
                        var S = o(N[h].value, N[h].width)
                          , D = S[0]
                          , P = "";
                        switch (N[h].align) {
                        case "left":
                            P = D + n(" ", N[h].width - i(D));
                            break;
                        case "center":
                            var y = N[h].width - i(D)
                              , M = a(y) ? (y - 1) / 2 : y / 2
                              , k = a(y) ? (y + 1) / 2 : y / 2;
                            P = n(" ", M) + D + n(" ", k);
                            break;
                        case "right":
                            P = n(" ", N[h].width - i(D)) + D
                        }
                        h === A - 1 ? t.ptl(P, d) : t.pt(P, d),
                        N[h].value = S[1]
                    }
                    for (var h = 0; A > h && "" === N[h].value; h++)
                        ;
                    if (h === A)
                        break
                }
            }
        },
        printXml: function(e, t, r) {
            for (var n = this._getXmlDoc(e), a = n.getElementsByTagName("print")[0], i = a.childNodes, o = i.length, l = 0; o > l; l++)
                this._printNode(i[l], t, r)
        }
    }
      , s = function(e) {
        return {
            time: e.order_time_fmt,
            poiName: e.poi_name
        }
    }
      , d = function(t, n) {
        var a = JSON.parse(localStorage.getItem("poiPrintTemplates"))
          , i = 0;
        if (a)
            for (var o = 0, l = a.length; l > o; o++)
                a[o].wmPoiId === n && (i = a[o].nowTemplateId);
        var s = parent.PRINTTEMPLATES[i];
        if (!s)
            return "";
        s = s.replace(/(&nbsp;|nbsp;)/g, CommConstants.IS_NEW_APP ? " " : "/blank");
        for (var d, u, f = function(e, t, n, a, i) {
            if ($.isPlainObject(n)) {
                "mul" === i ? void 0 === n[e] || void 0 === n[t] || isNaN(n[e]) || isNaN(n[t]) || (n[a] = r.multiply(n[e], n[t])) : "equal" === i && void 0 !== n[e] && (d = n[e] + "" === t ? !0 : !1,
                n[a] = d);
                for (var o in n)
                    f(e, t, n[o], a, i)
            } else if ($.isArray(n))
                for (var l = 0, s = n.length; s > l; l++)
                    f(e, t, n[l], a, i)
        }, c = /#DEF (([^\s]+)#equal#([^\s]+))/g; u = c.exec(s); )
            f(u[2], u[3], t, u[1], "equal");
        for (var h = /#DEF (([^\s]+)#mul#([^\s]+))/g; u = h.exec(s); )
            f(u[2], u[3], t, u[1], "mul");
        return e.render(s.substr(s.indexOf("<print>")), t)
    };
    return {
        xmlToPrinter: l,
        printVoToStandard: s,
        jsonToXml: d
    }
});
define('widgets/normal_dialog', ["module/page_jump"], function(a) {
    return function(n) {
        function t() {
            u && (clearInterval(u),
            u = null)
        }
        function s(a) {
            if (_) {
                var n = h.eq(a).data("resource-id");
                r.reportMV("b_shangou_online_e_enjmt6gt_mv", v, {
                    resourceId: n
                })
            }
        }
        var e = 5e3
          , o = n.size ? "modal-" + n.size : "modal-sm"
          , i = n["class"] ? n["class"] : ""
          , l = n.bannerList
          , d = n.bannerSize || 0
          , r = n.utils || null
          , c = '<div class="modal ' + i + '" role="dialog" aria-labelledby="normalModalLabel"' + (n.id ? ' id="' + n.id + '"' : "") + '><div class="modal-dialog ' + o + '" role="document"><div class="modal-content">';
        if (c += n.noHeader ? '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute;top: 10px;right: 10px;z-index: 999;"><span aria-hidden="true">×</span></button>' : '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h5 class="modal-title" id="normalModalLabel">' + n.title + "</h5></div>",
        c += '<div class="modal-body">' + n.content + '</div><div class="modal-footer">' + (n.btns[0] ? '<button type="button" class="btn btn-primary J-confirm ' + (n.btns[0]["class"] || "") + '">' + n.btns[0].txt + "</button>" : "") + (n.btns[1] ? '<button type="button" class="btn btn-default J-cancel ' + (n.btns[1]["class"] || "") + '" data-dismiss="modal">' + n.btns[1].txt + "</button>" : "") + "</div>",
        d) {
            c += '<div class="J-modal-banner css-modal-banner">' + l + '<div class="offset">';
            for (var b = 0; d > b; b++)
                c += '<span data-index="' + b + '" class="JS-banner-offset"></span>';
            c += "</div></div>"
        }
        c += "</div></div></div>";
        var u = null
          , m = $(c);
        m.find(".J-confirm").on("click", function() {
            n.btns[0] && n.btns[0].fn ? n.btns[0].fn() : "",
            t()
        }),
        m.find(".J-cancel").on("click", function() {
            n.btns[1] && n.btns[1].fn ? n.btns[1].fn() : "",
            m.modal("hide"),
            t()
        }),
        m.on("hide.bs.modal", function(a) {
            n.onClose && n.onClose(),
            m.remove(),
            t()
        });
        var f = m.find(".modal-dialog");
        if (d && r) {
            var v = r.url2Cid()
              , p = m.find(".J-modal-banner ul")
              , h = m.find(".J-modal-banner li")
              , g = m.find(".JS-banner-offset");
            g.eq(0).addClass("active"),
            h.on("click", function() {
                var n = $(this).data("link")
                  , t = $(this).data("resourceId");
                n && (a.go(n),
                r.reportMC("b_shangou_online_e_enjmt6gt_mc", v, {
                    resourceId: t
                }))
            });
            var C = 1
              , _ = !0;
            u = setInterval(function() {
                C === d && (C = 0,
                _ = !1),
                g.removeClass("active"),
                g.eq(C).addClass("active"),
                s(C);
                var a = -78 * C;
                p.css("transform", "translateY(" + a + "px)"),
                C++
            }, e),
            g.on("click", function() {
                C = $(this).data("index"),
                g.removeClass("active"),
                $(this).addClass("active");
                var a = -78 * C;
                p.css("transform", "translateY(" + a + "px)")
            }),
            s(0)
        }
        return m.modal("show"),
        f.css("margin-top", ($(window).height() - f.height()) / 2),
        m
    }
});
require.config({
    baseUrl: VM.STATIC_URL,
    paths: {}
}),
define('components/img_verify', ["util/utils"], function(i) {
    Vue.component("imgVerify", {
        props: {
            url: String,
            require: !0
        },
        data: function() {
            return {
                timer: $.now(),
                verifyValue: "",
                modalShow: !0
            }
        },
        computed: {
            getUrl: function() {
                return "/v2/common/captcha/get?url=" + this.url + "&time=" + this.timer
            }
        },
        mounted: function() {
            $("#verifyModal").modal("show")
        },
        methods: {
            changeTimer: function() {
                this.timer = $.now()
            },
            submit: function() {
                if ("/v2/order/history/r/print/info/v2" === this.url) {
                    var e = this;
                    $.get("/v2/common/captcha/verify", {
                        verifyValue: this.verifyValue,
                        url: this.url
                    }, function(a) {
                        0 === a.code ? ($("#verifyModal").modal("hide"),
                        e.verifyValue = "") : i.showTip("验证码输入错误，请重新输入")
                    })
                } else
                    $.get("/v2/common/captcha/verify", {
                        verifyValue: this.verifyValue,
                        url: this.url
                    }, function(e) {
                        0 === e.code ? location.reload() : i.showTip("验证码输入错误，请重新输入")
                    })
            }
        },
        template: '<div v-if="modalShow" class="modal fade" id="verifyModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel"> <div class="modal-dialog modal-sm" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h5 class="modal-title" id="createModalLabel">访问次数过多，请输入验证码</h5> </div> <div class="modal-body"> <div class="row"> <div class="col-sm-8"> <input v-model="verifyValue" class="form-control J-verify-value"> </div> <div class="col-sm-4"> <img class="J-verify-img" @click="changeTimer" :src="getUrl" alt="点击更换" title="点击更换" style="height: 34px;"> </div> </div> </div> <div class="modal-footer"> <span class="btn btn-primary J-submit-verify" @click="submit">提交</span> </div> </div> </div> </div>'
    })
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('module/order/order_utils', ["module/interface", "util/utils", "components/img_verify"], function(t, a, e) {
    "use strict";
    function o(t, a, e, o) {
        return t && a && e ? o ? a > t ? '<i class="fa fa-custom-down scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分下降"></i>' : t > a ? '<i class="fa fa-custom-up scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分上升"></i>' : '<i class="fa fa-exchange scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分持平"></i>' : a > t ? '<i class="fa fa-custom-down scroll"></i>' : t > a ? '<i class="fa fa-custom-up scroll"></i>' : '<i class="fa fa-exchange scroll"></i>' : ""
    }
    return {
        isPre: function(e, o) {
            if (!e)
                return !1;
            var s = e.data("pre");
            if (2 != s)
                return !1;
            var r = e.data("destinationDate").substring(0, 10);
            $.get(t.common.getServerTime, function(t) {
                return 0 == t.code && t.unixTime ? a.getTime("yyyy-MM-dd", t.unixTime) != r ? (a.showTip("该订单期望送达日期为[" + r + "]，请勿今日配送！"),
                o && o.enable(),
                !0) : !1 : void 0
            })
        },
        getCommentContext: function() {
            var a = $(".J-alert")
              , e = $(".J-info-icon")
              , o = $(".J-alert-text");
            $.ajax({
                url: t.order.getCommentContext,
                type: "GET",
                success: function(t) {
                    var s = t.context
                      , r = t.url;
                    s && (o.text(s),
                    a.show(),
                    r && (e.show(),
                    a.addClass("page-jump cursor"),
                    a.attr("data-url", r)))
                }
            })
        },
        commentCompare: o,
        commentStars: function(t) {
            for (var a = "", e = '<span><i class="fa fa-star star bg-yellow"></i></span> ', o = '<span><i class="fa fa-star star"></i></span> ', s = 0; 5 > s; s++)
                a += s < Math.round(t.toFixed(1)) ? e : o;
            return a
        },
        commentListHtml: function(t) {
            var a = "";
            return t.forEach(function(t, e) {
                a += t.hasData ? '<tr><td class="first"><div class="no-wrap">' + t.poiName + "</div></td><td>" + (t.level || "-- ") + "</td><td><span>" + (t.bizScore ? t.bizScore.toFixed(1) : "-- ") + " " + o(t.bizScore, t.bizScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.tasteScore ? t.tasteScore.toFixed(1) : "-- ") + " " + o(t.tasteScore, t.tasteScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.packScore ? t.packScore.toFixed(1) : "-- ") + " " + o(t.packScore, t.packScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.deliverySatisfaction ? t.deliverySatisfaction + "%" : "-- ") + " " + o(t.deliverySatisfaction, t.deliverySatisfactionPrevious, t.hasCompareData, 1) + "</span></td><td>" + (t.commentCnt || "-- ") + '</td><td class="last">' + (t.avgDeliveryTime || "-- ") + "分钟</td></tr>" : '<tr><td class="first"><div class="no-wrap">' + t.poiName + '</div></td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td class="last">--分钟</td></tr>'
            }),
            a
        }
    }
});
define('module/order/printorder_33', ["module/printer", "module/cookie", "util/utils", "module/interface", "module/order/printorder_parser", "widgets/normal_dialog", "components/img_verify", "module/order/order_utils"], function(t, i, e, n, r, o, a, d) {
    function c(t, i) {
        h && h.log && h.log(t, i)
    }
    function u(t, i) {
        c("[ajax post] " + t),
        $.ajax({
            type: "POST",
            url: t,
            success: function(t) {
                c("[ajax response] " + JSON.stringify(t)),
                i({
                    httpSuccess: !0,
                    data: t
                })
            },
            error: function(t, e, n) {
                c("[ajax response error] " + JSON.stringify(t), "error"),
                i({
                    httpSuccess: !1,
                    statusCode: t.status
                })
            }
        })
    }
    function p(i) {
        function r(t) {
            if (l)
                t && t(l);
            else {
                var i = s.appendUrlArgs({
                    wmPoiId: T,
                    token: F,
                    acctId: x
                });
                u(i, function(i) {
                    if (i.httpSuccess)
                        l = i.data,
                        0 === l.code ? t(i.data) : 999 === l.code && new Vue({
                            el: "#verify_img",
                            data: {
                                url: n.order.getPrintOrderInfo
                            },
                            components: [a],
                            template: '<div id="verify_img"><img-verify :url="url"></img-verify></div>'
                        });
                    else {
                        var e = "数据下载失败";
                        i.statusCode && (e += "，状态码：" + i.statusCode),
                        t(null, e)
                    }
                })
            }
        }
        function o(i) {
            function e(i) {
                return t.settings.getPrinterSetting(o.useModel ? n : "-1", i, !0)
            }
            var n = g(i)
              , r = t.getPrinters(n, !0)
              , o = t.settings.getSettings(n, !0);
            r.length ? $(r).each(function(t, n) {
                d(i, n, e(n.key()))
            }) : f(!1, "当前尚未安装或选择有效的打印机")
        }
        function d(t, i, e) {
            p(i, e, function(n) {
                !n && c(t, i, e, function(t) {
                    !t && f("打印失败！")
                })
            })
        }
        function c(t, i, e, n) {
            if (!m || !s)
                return void (n && n(!1, "不支持本地指令打印"));
            if (i.open()) {
                var r = !0;
                try {
                    m(i, t, e)
                } catch (o) {
                    alert(o),
                    r = !1
                } finally {
                    i.close()
                }
                n && n(r)
            } else
                n && n(!1, "打印机连接失败")
        }
        function p(t, i, e) {
            return void (e && e(!1))
        }
        t.settings.reload();
        var l, s = i.dataUrl, f = (i.cmdUrl,
        i.callback || function(t, i) {
            !t && i && e.showTip(i)
        }
        ), m = i.localPrintFunc, g = i.poiIdFunc;
        r(function(t, i) {
            i ? f(!1, i) : o(t)
        })
    }
    function l(i, n, o, a) {
        if (n.data && n.data.length)
            try {
                var d = o.ticketsCount;
                d || (d = o.orderCount ? {
                    1: o.orderCount
                } : {
                    1: 1,
                    2: 1,
                    3: 1
                }),
                e.showTip("订单正在打印，请稍等");
                var u = 0
                  , p = o.pageWidth || 0
                  , l = t.charWidthOfPageWidth(p) || i.width();
                for (var s in n.data) {
                    var f = n.data[s];
                    f.supportBarCode = k && e.versionCompare(k, S) > -1 ? 1 : 0;
                    for (var m in d)
                        for (var g = 0; g < d[m]; g++) {
                            u && h.sleep && h.sleep(1e3 + 1e3 * u),
                            f.receiptHoler = m,
                            f.caution = f.remark,
                            1 === f.has_been_invoiced && f.invoice_title && f.invoice_taxpayer_id && -1 === f.invoice_title.indexOf("税号") && (f.invoice_title = f.invoice_title + "（税号：" + f.invoice_taxpayer_id + "）"),
                            f.pickType = f.pick_type;
                            var v = r.jsonToXml(f, a);
                            localStorage.setItem("xmlTempStorage", "string" == typeof v ? v : JSON.stringify(v)),
                            i.init(o),
                            r.xmlToPrinter.printXml(v, i, l),
                            i.pageEnd(o.pageSpace)
                        }
                }
            } catch (w) {
                c("[_printOrder] " + w)
            }
        else
            alert("无订单数据！")
    }
    function s(t, i, e, r) {
        $.post("/api/order/today/history/print"),
        p({
            dataUrl: n.order.getPrintOrderInfo + "?wmOrderViewId=" + i + "&wmPoiId=" + e + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + t + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, n, o) {
                l(t, n, o, e);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: i,
                            wmPoiId: e
                        }, function(t) {
                            var i = t.data;
                            r && r.text("打印订单(" + i + ")")
                        })
                    }, 200)
                } catch (a) {}
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintOrder(t, i, "today", null, e.pageWidth)
            }
        })
    }
    function f(t, i) {
        var e = t ? t.id : i.data("orderId")
          , r = t ? t.wm_order_id_view_str : i.attr("data-view-id")
          , o = t ? t.wm_poi_id : i.data("poiId");
        t ? t.city_id : i.data("cityId");
        d.isPre(i),
        p({
            dataUrl: n.order.getPrintOrderInfo + "?wmOrderViewId=" + r + "&wmPoiId=" + o + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + e + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, i, e) {
                l(t, i, e, o);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: r,
                            wmPoiId: o
                        })
                    }, 200)
                } catch (n) {}
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintOrder(t, i, "today", null, e.pageWidth)
            }
        })
    }
    function m(t) {
        var i = $(this)
          , e = i.parents(".order")
          , n = e.data("orderId")
          , r = e.attr("data-view-id")
          , o = (e.data("orderType") || "",
        e.data("poiId"))
          , a = (e.data("cityId"),
        i.data("clicked"));
        d.isPre(e),
        1 != a && s(n, r, o, i)
    }
    function g(t) {
        var i = t.id
          , e = t.wm_order_id_view
          , n = t.wm_poi_id;
        s(i, e, n)
    }
    function v() {
        return e.getTime("yyyy-MM-dd")
    }
    function w() {
        $.post("/api/order/today/statistics/print"),
        p({
            dataUrl: "/v2/common/statistics/r/today/data?date=" + v(),
            cmdUrl: null,
            poiIdFunc: function(t) {
                return i.getCookie("wmPoiId")
            },
            localPrintFunc: function(t, i, e) {
                t.init(e),
                t.ptl(i.poi_name, "DHW,C"),
                t.ptl(i.date + " 当日汇总（有效）订单", "DH,C"),
                t.ptsl("*"),
                t.ptfl("{0:-6}{1:-25}", "订单号", "金额"),
                t.ptsl();
                var n = 0
                  , r = 0;
                for (var o in i.list) {
                    var a = i.list[o]
                      , d = 2 == a.wm_order_pay_type;
                    t.ptfl("{0:-6}{1:5}{2:-20}", a.num, d ? "(!)" : "", a.total),
                    d && (r++,
                    n += a.total)
                }
                t.ptsl("*"),
                t.ptl("有效订单数 " + i.count + (r ? " (在线支付 " + r + ")" : "")),
                t.ptl("总金额￥" + i.total + (n ? " (在线支付￥" + n.toFixed(2) + ")" : "")),
                t.pageEnd(e.pageSpace)
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintStatistics(t, i, null, e.width)
            }
        })
    }
    function y(t, i, e) {
        _(t, function(n) {
            n.ptl("#" + t + "订单申请退款", "DHW,C"),
            n.ptl("请于 " + i + " 前处理退款请求，超时未处理系统将自动退款", "DH"),
            n.ptl("订单号：" + e)
        })
    }
    function _(n, r) {
        function o(i) {
            return t.settings.getPrinterSetting(c.useModel ? a : "-1", i, !0)
        }
        if (CommConstants.IS_IN_APP) {
            var a = i.getCookie("wmPoiId")
              , d = t.getPrinters(a, !0)
              , c = t.settings.getSettings(a, !0);
            d.length ? $(d).each(function(t, i) {
                var n = o(i.key());
                i.open() ? (i.init(n),
                r(i),
                i.pageEnd(n.pageSpace)) : e.showTip("打印机连接失败")
            }) : e.showTip("当前尚未安装或选择有效的打印机")
        }
    }
    function I(t, i, e) {
        _(t, function(n) {
            n.ptl("#" + t + "订单已取消", "DHW,C"),
            n.ptl("请勿继续备餐配送", "DH"),
            n.ptl("订单号：" + i),
            n.ptl("取消原因：" + e)
        })
    }
    function P(t, i, e) {
        _(t, function(n) {
            n.ptl(i, "DHW,C"),
            n.ptl(e, "DH"),
            n.ptl("订单号：" + t)
        })
    }
    var h = (window.wmNetworkApi,
    window.wmSystemApi)
      , C = window.wmPrinterApi
      , S = "4.0.1.8"
      , O = /MeituanWaimai\/([\d\.]+)/
      , k = window.navigator.userAgent.match(O) || [];
    k = k[1];
    var T = "1" === localStorage.getItem("isChain") ? -1 : i.getCookie("wmPoiId")
      , F = i.getCookie("token")
      , x = i.getCookie("acctId");
    return {
        printOrder: m,
        printDayStatistics: w,
        printWhenConfirm: f,
        printRefundTips: y,
        printReturnGoodsTips: P,
        printCancelTips: I,
        printByOrder: g
    }
});
define('module/order/printorder', ["module/printer", "module/cookie", "util/utils", "module/interface", "module/order/printorder_parser", "widgets/normal_dialog", "components/img_verify", "module/order/order_utils", "module/order/printorder_33"], function(t, i, n, r, e, o, d, a, c) {
    function u(t, i) {
        C && C.log && C.log(t, i)
    }
    function l(t, i) {
        u("[ajax post] " + t),
        $.ajax({
            type: "POST",
            url: t,
            success: function(t) {
                u("[ajax response] " + JSON.stringify(t)),
                i({
                    httpSuccess: !0,
                    data: t
                })
            },
            error: function(t, n, r) {
                u("[ajax response error] " + JSON.stringify(t), "error"),
                i({
                    httpSuccess: !1,
                    statusCode: t.status
                })
            }
        })
    }
    function p(i) {
        function e(t) {
            if (p)
                t && t(p);
            else {
                var i = s.appendUrlArgs({
                    wmPoiId: S,
                    token: k,
                    acctId: T
                });
                l(i, function(i) {
                    if (i.httpSuccess)
                        p = i.data,
                        0 === p.code ? t(i.data) : 999 === p.code && new Vue({
                            el: "#verify_img",
                            data: {
                                url: r.order.getPrintOrderInfo
                            },
                            components: [d],
                            template: '<div id="verify_img"><img-verify :url="url"></img-verify></div>'
                        });
                    else {
                        var n = "数据下载失败";
                        i.statusCode && (n += "，状态码：" + i.statusCode),
                        t(null, n)
                    }
                })
            }
        }
        function o(i) {
            function n(i) {
                return t.settings.getPrinterSetting(o.useModel ? r : "-1", i, !0)
            }
            var r = g(i)
              , e = t.getPrinters(r, !0)
              , o = t.settings.getSettings(r, !0);
            e.length ? $(e).each(function(t, r) {
                a(i, r, n(r.id))
            }) : f(!1, "当前尚未安装或选择有效的打印机")
        }
        function a(t, i, n) {
            u(i, n, function(r) {
                !r && c(t, i, n, function(t) {
                    !t && f("打印失败！")
                })
            })
        }
        function c(t, i, n, r) {
            if (!v || !s)
                return void (r && r(!1, "不支持本地指令打印"));
            var e = !0;
            try {
                v(i, t, n)
            } catch (o) {
                alert(o),
                e = !1
            } finally {}
            r && r(e)
        }
        function u(t, i, n) {
            n && n(!1)
        }
        t.settings.reload();
        var p, s = i.dataUrl, f = (i.cmdUrl,
        i.callback || function(t, i) {
            !t && i && n.showTip(i)
        }
        ), v = i.localPrintFunc, g = i.poiIdFunc;
        e(function(t, i) {
            i ? f(!1, i) : o(t)
        })
    }
    function s(i, r, o, d) {
        if (r.data && r.data.length)
            try {
                var a = o.ticketsCount;
                a || (a = o.orderCount ? {
                    1: o.orderCount
                } : {
                    1: 1,
                    2: 1,
                    3: 1
                }),
                n.showTip("订单正在打印，请稍等");
                var c = 0
                  , l = o.pageWidth || 0
                  , p = t.charWidthOfPageWidth(l);
                for (var s in r.data) {
                    var f = r.data[s];
                    f.supportBarCode = U && n.versionCompare(U, x) > -1 ? 1 : 0;
                    for (var v in a)
                        for (var g = 0; g < a[v]; g++) {
                            c && C.sleep && C.sleep(1e3 + 1e3 * c),
                            f.receiptHoler = v,
                            f.caution = f.remark,
                            1 === f.has_been_invoiced && f.invoice_title && f.invoice_taxpayer_id && -1 === f.invoice_title.indexOf("税号") && (f.invoice_title = f.invoice_title + "（税号：" + f.invoice_taxpayer_id + "）"),
                            f.pickType = f.pick_type;
                            var m = e.jsonToXml(f, d);
                            localStorage.setItem("xmlTempStorage", "string" == typeof m ? m : JSON.stringify(m)),
                            W.print(i.id, m, {
                                charWidth: p
                            })
                        }
                }
            } catch (h) {
                u("[_printOrder] " + h)
            }
        else
            alert("无订单数据！")
    }
    function f(t, i, e, o) {
        $.post("/api/order/today/history/print"),
        p({
            dataUrl: r.order.getPrintOrderInfo + "?wmOrderViewId=" + i + "&wmPoiId=" + e + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + t + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, n, r) {
                s(t, n, r, e);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: i,
                            wmPoiId: e
                        }, function(t) {
                            var i = t.data;
                            o && o.text("打印订单(" + i + ")")
                        })
                    }, 200)
                } catch (d) {}
            }
        }),
        n.reportMC_SG.report("b_s9qljzfz")
    }
    function v(t, i) {
        var n = t ? t.id : i.data("orderId")
          , e = t ? t.wm_order_id_view_str : i.attr("data-view-id")
          , o = t ? t.wm_poi_id : i.data("poiId");
        t ? t.city_id : i.data("cityId");
        a.isPre(i),
        p({
            dataUrl: r.order.getPrintOrderInfo + "?wmOrderViewId=" + e + "&wmPoiId=" + o + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + n + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, i, n) {
                s(t, i, n, o);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: e,
                            wmPoiId: o
                        })
                    }, 200)
                } catch (r) {}
            }
        })
    }
    function g(t) {
        var i = $(this)
          , r = i.parents(".order")
          , e = r.data("orderId")
          , o = r.attr("data-view-id")
          , d = (r.data("orderType") || "",
        r.data("poiId"))
          , c = (r.data("cityId"),
        i.data("clicked"));
        if (a.isPre(r),
        1 != c) {
            f(e, o, d, i);
            var u = n.url2Cid();
            u && n.reportMC("b_shangou_online_e_g5ytv0qf_mc", u, null, null, {
                order_id: e
            })
        }
    }
    function m(t) {
        var i = t.id
          , n = t.wm_order_id_view
          , r = t.wm_poi_id;
        f(i, n, r)
    }
    function h() {
        return n.getTime("yyyy-MM-dd")
    }
    function w() {
        $.post("/api/order/today/statistics/print"),
        p({
            dataUrl: "/v2/common/statistics/r/today/data?date=" + h(),
            cmdUrl: null,
            poiIdFunc: function(t) {
                return i.getCookie("wmPoiId")
            },
            localPrintFunc: function(i, n, r) {
                var e = '<print>\n<div font="B" align="center">' + n.poi_name + '</div>\n<div font="H" align="center">' + (n.date + " 当日汇总（有效）订单") + '</div>\n<line chars="*"/>\n<tr>\n    <td width="6" align="left">订单号</td>\n    <td width="25" align="right">金额</td>\n</tr>\n<line />'
                  , o = 0
                  , d = 0;
                for (var a in n.list) {
                    var c = n.list[a]
                      , u = 2 == c.wm_order_pay_type;
                    e += '\n<tr>\n<td width="6" align="right">' + c.num + '</td>\n<td width="5" align="left">' + (u ? "(!)" : "") + '</td>\n<td width="20" align="right">' + c.total + "</td>\n</tr>",
                    u && (d++,
                    o += c.total)
                }
                e += '\n<line chars="*"/>\n<div>' + ("有效订单数 " + n.count + (d ? " (在线支付 " + d + ")" : "")) + "</div>\n<div>" + ("总金额￥" + n.total + (o ? " (在线支付￥" + o.toFixed(2) + ")" : "")) + "</div>\n</print>";
                var l = r.pageWidth || 0
                  , p = t.charWidthOfPageWidth(l);
                W.print(i.id, e, {
                    charWidth: p
                })
            }
        })
    }
    function _(i, n, r) {
        y(i, function(e, o) {
            var d = '\n<print>\n<div font="B" align="center">#' + i + '订单申请退款</div>\n<div font="H">请于 ' + n + ' 前处理退款请求，超时未处理系统将自动退款</div>\n<div font="D">订单号：' + r + "</div>\n</print>\n"
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a);
            W.print(e.id, d, {
                charWidth: c
            })
        })
    }
    function y(r, e) {
        function o(i) {
            return t.settings.getPrinterSetting(c.useModel ? d : "-1", i, !0)
        }
        if (CommConstants.IS_IN_APP) {
            var d = i.getCookie("wmPoiId")
              , a = t.getPrinters(d, !0)
              , c = t.settings.getSettings(d, !0);
            a.length ? $(a).each(function(t, i) {
                var n = o(i.id);
                e(i, n)
            }) : n.showTip("当前尚未安装或选择有效的打印机")
        }
    }
    function I(i, n, r) {
        y(i, function(e, o) {
            var d = '\n<print>\n<div font="B" align="center">#' + i + '订单已取消</div>\n<div font="H">请勿继续备餐配送</div>\n<div font="D">订单号：' + n + '</div>\n<div font="D">取消原因：' + r + "</div>\n</print>\n"
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a);
            W.print(e.id, d, {
                charWidth: c
            })
        })
    }
    function P(i, n, r) {
        y(i, function(e, o) {
            var d = r.split("\n").map(function(t) {
                return '<div font="H">' + t + "</div>\n"
            }).join("")
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a)
              , u = '\n<print>\n<div font="B" align="center">' + n + "</div>\n<line/>\n" + d + '<line/>\n<div font="D" align="right">订单号：' + i + "</div>\n</print>\n";
            W.print(e.id, u, {
                charWidth: c
            })
        })
    }
    var C = (window.wmNetworkApi,
    window.wmSystemApi)
      , W = window.wmPrinterApi
      , O = C && C.getAppInfo && C.getAppInfo();
    if (!O || O.code < 4e3)
        return c;
    var S = "1" === localStorage.getItem("isChain") ? -1 : i.getCookie("wmPoiId")
      , k = i.getCookie("token")
      , T = i.getCookie("acctId")
      , x = "4.0.1.8"
      , F = /MeituanWaimai\/([\d\.]+)/
      , U = window.navigator.userAgent.match(F) || [];
    return U = U[1],
    {
        printOrder: g,
        printDayStatistics: w,
        printWhenConfirm: v,
        printRefundTips: _,
        printReturnGoodsTips: P,
        printCancelTips: I,
        printByOrder: m
    }
});
"undefined" == typeof WAIMAICOS && (WAIMAICOS = {}),
WAIMAICOS.GDMap = function(t) {
    this.options = $.extend({
        center: [116.404, 39.915],
        zoom: 10,
        container: "map"
    }, t),
    this.overlay = this.GdMap = null,
    this.wrap = $("#" + this.options.container),
    this.mouseTool = null,
    this.clickListener = null,
    this.init()
}
,
WAIMAICOS.GDMap.prototype = {
    init: function() {
        return this.createMap(),
        this
    },
    createMap: function() {
        this.GdMap = new AMap.Map(this.options.container,{
            center: new AMap.LngLat(this.options.center[0],this.options.center[1]),
            level: this.options.zoom,
            zoom: this.options.zoom
        })
    },
    addToolBar: function(t) {
        var e = this.getMap();
        return e.plugin(["AMap.ToolBar"], function() {
            var n = new AMap.ToolBar(t);
            e.addControl(n)
        }),
        this
    },
    editPolygon: function(t, e, n) {
        var o = this.getMap();
        o.plugin(["AMap.PolyEditor"], function() {
            editorTool = new AMap.PolyEditor(o,t),
            AMap.event.addListener(editorTool, "adjust", function(e) {
                n(t.getPath())
            }),
            AMap.event.addListener(editorTool, "removenode", function(e) {
                n(t.getPath())
            }),
            e && e(editorTool)
        })
    },
    addClickListener: function(t) {
        var e = this.getMap();
        this.clickListener = AMap.event.addListener(e, "click", function(e) {
            var n = e.lnglat.getLng()
              , o = e.lnglat.getLat();
            t && t([n, o])
        })
    },
    removeClickListener: function() {
        this.clickListener && AMap.event.removeListener(this.clickListener)
    },
    drawPlygon: function(t, e, n) {
        var o = this.getMap()
          , i = this.mouseTool;
        return o.plugin(["AMap.MouseTool"], function() {
            i = new AMap.MouseTool(o),
            i.polygon(t),
            AMap.event.addListener(i, "draw", function(t) {
                var a, s = t.obj, r = t.obj.getPath().length;
                t.obj.getPath();
                return 3 > r ? (alert("请您修改绘制区域并保证绘制的区域为多边形！"),
                void s.hide()) : (n(s.getPath()),
                o.plugin(["AMap.PolyEditor"], function() {
                    a = new AMap.PolyEditor(o,s),
                    AMap.event.addListener(a, "adjust", function(t) {
                        n(s.getPath())
                    }),
                    a.open(),
                    e && e(t, s, a)
                }),
                i.close(!1),
                [s, a])
            })
        }),
        i
    },
    showPolygon: function(t) {
        t.setMap(this.getMap())
    },
    showPolyline: function(t) {
        t.setMap(this.getMap())
    },
    showRadius: function(t) {
        t.setMap(this.getMap())
    },
    getMap: function() {
        return this.GdMap
    },
    addMarker: function(t, e, n, o, i) {
        n || e || (e = '<i class="fa fa-map-marker" style="font-size:36px; color: #06c1ae;"></i>');
        var a = {
            icon: new AMap.Icon({
                size: new AMap.Size(36,36),
                image: n,
                imageOffset: new AMap.Pixel(0,0)
            }),
            draggable: !1,
            position: new AMap.LngLat(t.lng,t.lat),
            content: e,
            topWhenClick: !0
        };
        return i && (a.offset = new AMap.Pixel(i.x,i.y)),
        console.debug(a),
        poiMarker = new AMap.Marker(a),
        poiMarker.setMap(this.GdMap),
        o && o(poiMarker),
        this
    },
    setCenter: function(t, e) {
        this.GdMap.setZoomAndCenter(this.options.zoom, new AMap.LngLat(t,e))
    },
    destroy: function() {
        this.GdMap.destroy(),
        delete this
    }
};
define("lib/GDMap.source", function() {});

require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0,
    paths: {}
}),
define("module/order/order_map", ["lib/GDMap.source", "module/interface", "widgets/normal_dialog", "util/utils"], function(a, t, e, i) {
    return {
        thismap: null,
        shippingObj: [],
        poiPoint: null,
        orderPoint: null,
        isInArea: !1,
        addressResult: null,
        init: function(a, t, e, i, n, o) {
            this.initMap(a, t, e, i, n, o)
        },
        initMap: function(a, t, e, i, n, o) {
            this.poiPoint = new AMap.LngLat(t.lng,t.lat),
            this.orderPoint = new AMap.LngLat(e.lng,e.lat),
            this.thismap = new WAIMAICOS.GDMap({
                center: [t.lng, t.lat],
                zoom: 13,
                container: "j-map-container"
            }).addToolBar(),
            this.thismap.addMarker(this.poiPoint, '<img src="/static/62416314/imgs/customer.png" /><span style="color:#2a2a2a;white-space:nowrap;background: #fff;padding: 0 3px;">' + i + "</span>"),
            this.thismap.addMarker(this.orderPoint, '<img src="/static/62416314/imgs/user.png" /><span style="color:#2a2a2a;white-space:nowrap;background: #fff;z-index:99;padding: 0 3px;">顾客地址：' + n + "</span>"),
            ("1003" == o || "0000" == o) && this.loadMap(a)
        },
        geocoder: function(a, t) {
            var e;
            AMap.service(["AMap.Geocoder"], function() {
                e = new AMap.Geocoder({
                    radius: 1e3,
                    extensions: "all"
                }),
                e.getAddress(a, function(a, e) {
                    "complete" === a && "OK" === e.info && t(e.regeocode.formattedAddress)
                })
            })
        },
        loadMap: function(a) {
            var t = a;
            if (null == t)
                return !1;
            for (var e = $.parseJSON(t), i = 0; i < e.length; i++)
                if ("1" == e[i].type) {
                    var n;
                    n = "#FF5A5A";
                    for (var o = [], r = 0; r < e[i].area.length; r++)
                        o.push(new AMap.LngLat(e[i].area[r].y / 1e6,e[i].area[r].x / 1e6));
                    var d = new AMap.Polygon({
                        path: o,
                        strokeColor: n,
                        strokeOpacity: 1,
                        strokeWeight: 4,
                        fillColor: n,
                        fillOpacity: .4
                    });
                    this.thismap.showPolygon(d),
                    d.getBounds().contains(this.orderPoint) && (this.isInArea = !0)
                }
        },
        loadMapData: function() {
            var a = this
              , n = [];
            $(".order").each(function() {
                var a = $(this)
                  , t = a.find(".j-show-map");
                if (t.length > 0) {
                    var e = {
                        wmOrderViewId: a.attr("data-view-id"),
                        wmPoiId: a.data("poiId"),
                        cityId: a.data("cityId"),
                        from_lat: t.data("poiLat"),
                        from_lng: t.data("poiLng"),
                        to_lat: t.data("orderLat"),
                        to_lng: t.data("orderLng")
                    };
                    n.push(e)
                }
            });
            var o = function() {
                $(".order").each(function() {
                    var t = $(this)
                      , n = t.data("poiId")
                      , o = 1e3 * t.data("orderTime")
                      , r = "/api/poi/spArea"
                      , d = t.find(".j-show-map")
                      , s = {
                        lat: d.data("poiLat") / 1e6,
                        lng: d.data("poiLng") / 1e6
                    }
                      , l = {
                        lat: d.data("orderLat") / 1e6,
                        lng: d.data("orderLng") / 1e6
                    };
                    if (l.lat) {
                        var c, p = d.data("distance");
                        c = p ? p > 1e3 ? (p / 1e3).toFixed(1) + "km" : "<1km" : "无法获取距离",
                        d.text(c),
                        t.delegate(".j-address", "click", function() {
                            var d = t.find(".j-show-map")
                              , l = d.data("distance")
                              , c = {
                                lat: d.data("orderLat") / 1e6,
                                lng: d.data("orderLng") / 1e6
                            }
                              , p = d.data("addr")
                              , g = t.find(".J-delivery-section").data("team-code");
                            $.ajax({
                                url: r,
                                data: {
                                    wmPoiId: n,
                                    orderTime: o
                                },
                                success: function(t) {
                                    var i = '<div class="des j-des"></div><p class="address-check"></p><div id="j-map-container" class="map-container" style="height:400px;"></div>'
                                      , n = e({
                                        title: "查看地图",
                                        content: i,
                                        btns: [],
                                        size: "md"
                                    })
                                      , o = n.find(".j-des")
                                      , r = JSON.stringify(t.data).replace(/\\/g, "")
                                      , r = r.substring(1, r.length - 1)
                                      , d = l ? "门店与送货地址相距：" + l + "米。" : "获取配送距离失败。";
                                    if ("0.000000" === c.lat || "0.000000" === c.lng ? o.html('没有在地图上找到该地址。<span class="font-12 color-666">（地图标示可能存在误差，建议您进行电话确认，数据仅供参考）</span>') : o.html(d + '<span class="font-12 color-666">（地图标示可能存在误差，建议您进行电话确认，数据仅供参考）</span>'),
                                    !window.AMap)
                                        return void KangaroouiVue.toast.error("地图加载失败，请刷新页面后重试！");
                                    a.init(r, s, c, "商家所在位置", p, g);
                                    var f = new AMap.LngLat(c.lng,c.lat);
                                    a.geocoder(f, function(a) {
                                        "" !== a && n.find(".address-check").html("<span class='font-12 color-666'>顾客标注的地图位置（数据仅供参考）：" + a + "</span>")
                                    })
                                },
                                error: function() {
                                    i.showTip("没有获取到配送区域数据，无法显示地图")
                                }
                            })
                        })
                    }
                })
            };
            $.ajax({
                url: t.order.getDeliveryDistance,
                type: "post",
                data: {
                    orderLatAndLngS: JSON.stringify(n)
                },
                success: function(a) {
                    if (0 === a.code)
                        for (var t = 0; t < a.data.length; t++)
                            $("#" + a.data[t].wm_order_id_view_str).find(".j-show-map").data("distance", a.data[t].distance);
                    o()
                }
            })
        }
    }
});
define('util/template', [], function() {
    "use strict";
    var e = {}
      , t = {};
    !function(e) {
        for (var r = e.length; r--; )
            t[e[r]] = !0
    }("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield".split(","));
    var r = function(e) {
        return t[e]
    };
    return function(t, n) {
        if (e[t])
            return n ? e[t](n) : e[t];
        t = t.replace(/\/\*.*?\*\/|\/\/.*?[\n\r\t]/g, "").replace(/[\r\t\n]/g, " ");
        var a = {}
          , i = "var "
          , o = t.match(/<%(.*?)%>/g).join(",").match(/[\_\$a-zA-Z]+[0-9]*/g);
        !function(e) {
            for (var t = e.length, n = ""; t--; )
                n = e[t],
                n && !r(n) && (a.hasOwnProperty(n) || (i += n + "= __data." + n + ",",
                a[n] = !0))
        }(o);
        var c = e[t] = new Function("__data",i + "__s=''; __s += '" + t.replace(/%>[\s]*<%/g, "").replace(/<%=(.*?)%>/g, "'+($1)+'").replace(/<%/g, "';").replace(/%>/g, "__s += '") + "';return __s;");
        return n ? c(n) : c
    }
});
define('module/order/copyorder', ["module/cookie", "util/utils"], function(e, t) {
    function o(e) {
        var o = document.getElementById("copyContent_" + e).value;
        try {
            window.wmSystemApi && o ? (window.wmSystemApi.setClipBoardText(o),
            t.showTip("复制成功", "success")) : console.log(o)
        } catch (i) {
            console.log(i)
        }
    }
    function i() {
        var e = $(this)
          , i = e.parents(".order");
        if (1 != e.data("clicked")) {
            var d = i.attr("data-view-id");
            o(d),
            e.text("复制成功").addClass("btn-disabled").data("clicked", !0),
            setTimeout(function() {
                e.text("复制订单").removeClass("btn-disabled").data("clicked", !1)
            }, 3e3);
            var n = t.url2Cid();
            n && t.reportMC("b_shangou_online_e_fjkbbx2h_mc", n, null, null, {
                order_id: d
            })
        }
    }
    return {
        copyOrder: i
    }
});
define('widgets/status_button', [], function() {
    var n = function(n) {
        var t = $(n)
          , d = 0;
        return t.enable = function() {
            return d = 0,
            t.find(".dot").remove(),
            t.removeAttr("disabled").removeClass("btn-disabled")
        }
        ,
        t.disable = function() {
            return d = 1,
            t.attr("disabled", "disabled").addClass("btn-disabled")
        }
        ,
        t.loading = function() {
            d = 1;
            var n = $('<i class="dot"></i>');
            return t.attr("disabled", "disabled").append(n)
        }
        ,
        t.isDisabled = function() {
            var n = $(this).attr("disabled");
            return "undefined" != typeof n && n !== !1 || t.find(".dot").size() > 0 ? !0 : !1
        }
        ,
        t.hasOwnRights = function() {
            return t.data() && 1 == t.data().ownRights ? !0 : !1
        }
        ,
        t
    };
    return n
});
define('widgets/vote_star', [], function() {
    var t = function(t) {
        this.markingCb = t.markingCb || null,
        this.jQdom = t.jQdom,
        this.mark = 0,
        this.init(),
        this.enable()
    }
      , i = t.prototype;
    return i.setMark = function(t) {
        t = /[1-5]/.test(t) ? t : 0,
        this.mark = parseInt(t),
        this.jQdom.find(".stars").removeClass("startNum0 startNum1 startNum2 startNum3 startNum4 startNum5").addClass("startNum" + t)
    }
    ,
    i.getMark = function() {
        return this.mark
    }
    ,
    i.giveMark = function(t) {
        this.setMark($(t.target).index() + 1),
        "function" == typeof this.markingCb && this.markingCb()
    }
    ,
    i.init = function() {
        for (var t = '<span class="stars">', i = 0; 5 > i; i++)
            t += '<i class="fa fa-star"></i>';
        t += "</span>",
        this.jQdom.html(t)
    }
    ,
    i.enable = function() {
        this.jQdom.delegate("i", "click", this.giveMark.bind(this))
    }
    ,
    i.disable = function() {
        this.jQdom.undelegate()
    }
    ,
    t
});
define('util/format_check', [], function() {
    "use strict";
    return {
        checkEmail: function(e) {
            return /[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/i.test(e)
        },
        checkPhone: function(e) {
            return /^1\d{10}$/.test(e)
        },
        checkFloatNumber: function(e, t) {
            ("number" != typeof t || 0 >= t) && (t = 2);
            var n = new RegExp("^(([0-9]+)|([0-9]+\\.[0-9]{1," + t + "}))$","g");
            return n.test(e)
        },
        checkIntNumber: function(e) {
            return /^(0|[1-9]\d*)$/.test(e)
        }
    }
});
define("module/order/order_slidebar", ["module/interface", "util/utils", "module/cookie"], function(e, t, o) {
    "use strict";
    var r = $(".J-auto-gprs")
      , n = $("#ordersCount")
      , s = $("#ordersSum")
      , a = $("#canceledCount")
      , d = $("#canceledOrderArea")
      , i = $("#unprocessedCount")
      , c = $("#refundCount")
      , u = $("#assemblePreCount")
      , l = $("#closeGprs")
      , m = $("#canceledOrder")
      , f = $("#unprocessedOrder")
      , g = $("#J-toady-order-view")
      , p = $("#J-no-today-order-view-tips")
      , h = "/v2/order/receive/processed"
      , C = parseInt(o.getCookie("brandId") || 0)
      , v = {
        init: function(e) {
            var t = location.href.indexOf("/v2/order/history") > -1
              , r = document.querySelectorAll(".J-poi-name")
              , n = "全部门店"
              , s = -1;
            t && (n = e ? e.poiName : window.parent.document.querySelector(".wm-poi-name .names").innerText,
            s = e ? e.poiId : o.getCookie("wmPoiId"));
            for (var a = "(" + n + ")", d = 0, i = r.length; i > d; d++)
                r[d].innerText = a;
            this.getNumAndAmount(s),
            this.getCanceledCount(s),
            this.getUnprocessedCount(s),
            this.getGprsStatus(s)
        },
        getNumAndAmount: function(o) {
            0 >= C && $.ajax({
                url: e.order.getNumAndAmount,
                data: {
                    requestWmPoiId: o
                },
                type: "GET",
                success: function(e) {
                    if (0 === e.code) {
                        g.show();
                        var o = e.data
                          , r = o.count
                          , a = o.sum && o.sum.toFixed(2);
                        n.length && (n.text(r),
                        s.text(a))
                    } else
                        1 === e.code ? (p.text(e.msg),
                        p.show()) : t.showTip(e.msg)
                },
                error: function() {}
            })
        },
        getCanceledCount: function(o) {
            CommConstants.IS_IN_APP && 0 >= C && $.ajax({
                url: e.order.getCanceledCount,
                type: "GET",
                data: {
                    requestWmPoiId: o
                },
                success: function(e) {
                    if (0 === e.code) {
                        var o = e.data;
                        -1 != o ? a.length && a.text(o) : d.length && d.hide()
                    } else
                        t.showTip(e.msg)
                },
                error: function() {}
            })
        },
        getUnprocessedCount: function(o) {
            CommConstants.IS_IN_APP && 0 >= C && $.ajax({
                url: e.order.getUnprocessedCount,
                type: "GET",
                data: {
                    requestWmPoiId: o
                },
                success: function(e) {
                    0 === e.code ? i.length && i.text(e.data) : t.showTip(e.msg)
                },
                error: function() {}
            })
        },
        getGprsStatus: function(t) {
            var n = o.getCookie("wmPoiId");
            -1 != n && $.ajax({
                url: e.order.getStyle,
                type: "GET",
                data: {
                    requestWmPoiId: t
                },
                success: function(e) {
                    if (0 === e.code) {
                        var e = e.data;
                        e.wm_poi_id == n && 4 === e.self_service && r.show()
                    }
                },
                error: function() {}
            })
        }
    };
    l.on("click", function() {
        var o = $(this);
        o.attr("disabled", "disabled"),
        $.ajax({
            url: e.order.closeGprs,
            type: "POST",
            success: function(e) {
                0 === e.code ? (t.showTip("已关闭GPRS接单，并开启电脑手动接单!", "warn"),
                setTimeout(function() {
                    r.hide()
                }, 2e3)) : (t.showTip(e.msg),
                o.removeAttr("disabled"))
            },
            error: function() {
                t.showTip("网络异常,关闭GPRS失败,请稍后重试!"),
                o.removeAttr("disabled")
            }
        })
    }),
    f.on("click", function() {
        localStorage.setItem("orderToDelivery", !0),
        parent.location.hash = h,
        location.reload()
    }),
    m.on("click", function() {
        localStorage.setItem("orderCanceledDelivery", !0),
        parent.location.hash = h,
        location.reload()
    });
    var w = localStorage.getItem("orderRefundCount") || 0;
    c.text(w);
    var I = localStorage.getItem("assemblePreCount") || 0;
    if (u.text(I),
    CommConstants.IS_IN_APP && $(".J-need-care").show(),
    C > 0) {
        var P = $(".J-order-sidebar");
        P.hide()
    }
    return v
});
require.config({
    baseUrl: VM.STATIC_URL
}),
define("module/order/order_status", [], function() {
    "use strict";
    return {
        checkOrderStatus: function(t) {
            var a = $("#" + t.wmOrderViewId);
            if (a) {
                if (12 == t.code && a.data("deliveryStatus", t.logisticsStatus),
                15 == t.code) {
                    var s = a.data("payStatus");
                    if (!(t.PayStatus > s))
                        return;
                    a.data("payStatus", t.PayStatus)
                }
                if (16 == t.code) {
                    var e = a.data("status");
                    if (!(t.status > e))
                        return;
                    a.data("status", t.status)
                }
                var o = a.data("status")
                  , r = a.data("payStatus")
                  , i = a.data("deliveryStatus")
                  , d = a.data("deliveryCode")
                  , n = a.data("pickType")
                  , u = a.data("pre")
                  , C = a.data("assignTime")
                  , p = ""
                  , c = a.data("thirdDeliveryCode")
                  , m = ["00009002", "00009003"].indexOf(c) > -1;
                1 != n ? (2 != o || 0 != r && 3 != r || 10 != i || (p = "待骑手" + CommConstants.shopCategoryObj.pickupG),
                4 == o && ("0000" != d || m ? (0 == r || 3 == r || 5 == r || 7 == r) && ((-1 == i || -20 == i) && (p = 1 == n ? "待顾客" + CommConstants.shopCategoryObj.pickupG : t.b2cPoiCross ? "待清关" : "待发配送"),
                (0 == i || 1 == i) && (p = C > 0 && 0 == u ? "待分配骑手" : "待骑手接单"),
                5 == i && (p = "已分配骑手"),
                10 == i && (p = "待骑手" + CommConstants.shopCategoryObj.pickupG),
                15 == i && (p = "骑手已到店"),
                20 == i && (p = "骑手已" + CommConstants.shopCategoryObj.pickupG),
                40 == i && (p = "骑手已送达"),
                100 == i && (p = "配送取消"),
                21 == i && (p = "骑手已集餐"),
                22 == i && (p = "餐品运输中"),
                23 == i && (p = "餐品到达配送点"),
                24 == i && (p = "餐品派送中")) : (20 == i || 0 === i || 15 === i || 40 === i) && (p = CommConstants.shopCategoryObj.MerchandiseDeliveryG)),
                8 == o && (p = "顾客已确认收" + CommConstants.shopCategoryObj.pickupG.substring(1, 2),
                CommConstants.newCategory || a.find(".J-cancel-order").hide()),
                9 == o && (p = "订单取消")) : (4 == o && (p = "待顾客" + CommConstants.shopCategoryObj.pickupG),
                8 == o && (p = "顾客已" + CommConstants.shopCategoryObj.pickupG),
                9 == o && (p = "订单取消")),
                p && a.find(".order-state").text(p)
            }
        }
    }
});
define("module/order/order_other_info", ["module/interface", "util/utils", "module/cookie"], function(t, e, s) {
    return {
        getOtherInfo: function(a, i) {
            var n = this
              , o = [];
            a.each(function(t, e) {
                var s = {};
                s.wmOrderViewId = $(e).attr("data-view-id"),
                s.wmPoiId = $(e).data("poiId"),
                s.cityId = $(e).data("cityId"),
                o.push(s)
            });
            var r = {
                orderInfos: JSON.stringify(o),
                acctId: s.getCookie("acctId"),
                device_uuid: s.getCookie("device_uuid")
            };
            $.ajax({
                url: t.order.getOrderAsyncInfos,
                data: r,
                success: function(t) {
                    function s(t, e) {
                        return t.slice(0, 10) === e.slice(0, 10) ? e.slice(11) : e
                    }
                    if (0 === t.code) {
                        var a = t.data
                          , o = !1
                          , r = e.url2Cid();
                        for (var d in a) {
                            var c = $("#" + d)
                              , l = a[d]
                              , p = c.find(".J-order-time")
                              , u = c.find(".J-city-name")
                              , f = c.find(".J-print-order")
                              , m = c.find(".J-send-delivery")
                              , h = c.data("status")
                              , y = c.data("poi-sla")
                              , v = localStorage.getItem("isChain")
                              , w = m.find(".J-send-delivery-own-rights-img")
                              , J = c.find(".J-delivery-ownRights")
                              , g = p.find(".color-main")
                              , x = p.find(".qrcode-tips")
                              , b = l.estimate_arrival_time_left
                              , _ = l.estimate_arrival_time_right;
                            if (l.isScanCodeDelivery && !x.length && $('<span class="qrcode-tips">扫码配送<span>').appendTo(p),
                            g && b && _) {
                                var I = "建议 " + b + "~" + s(b, _) + " 间送达";
                                g.text(I)
                            }
                            if ("1" === v && l.city_name && u.text(l.city_name),
                            l.privacyRecord && c.find(".J-privacy-record").removeClass("hide"),
                            l.purchase_number && c.find(".J-order-num").text("#下单" + l.purchase_number + "次"),
                            l.print_cnt && f.length && f.text("打印订单(" + l.print_cnt + ")"),
                            l.cancel_reason) {
                                var S = l.refundBizType;
                                2 == S && (l.cancel_reason = "商家开通极速退款服务，用户申请系统自动通过"),
                                c.find(".J-order-reason").show().html("取消原因：" + l.cancel_reason)
                            }
                            if (h > 2 && (y === !0 ? n._displayStatusTrackInfoForSLA(c, l, i) : n._displayStatusTrackInfo(c, l),
                            n._displayExceptionTypeInfo(c, l)),
                            l.ptPicUrl) {
                                var k = new Image;
                                k.src = l.ptPicUrl,
                                k.style.position = "absolute",
                                k.style.top = "-12px",
                                k.style.left = "10px",
                                k.style.width = "55px",
                                m.append(k),
                                o = !0
                            }
                            if (1 == c.data("ownRights") && ("none" === m.css("display") || l.ptPicUrl || (e.reportMV(e.ownRightReportBid.beforeOrder, r, null, null, {}),
                            w.show()),
                            "none" == m.css("display") && void 0 !== l.rightsValid && l.rightsContent)) {
                                var C = l.rightsValid ? "ordered" : "beforeOrdered";
                                e.reportMV(e.ownRightReportBid[C], r);
                                var D = '<div class="clearfix mb20 own-rights-container" style="background:' + l.rightsBgColor + '"><img class="pull-lef img" style="width:12px;height:14px;" src="' + l.rightsIcon + '"><span class="content" style="color:' + l.rightsColor + '">' + l.rightsContent + "</span></div>";
                                J.html(D)
                            }
                        }
                        o && e.reportMV("b_shangou_online_e_qpjx3r2q_mv", r)
                    }
                }
            })
        },
        _displayStatusTrackInfoForSLA: function(t, s, a) {
            function i(t) {
                y.text("已超过" + m + "时间："),
                e.countDown({
                    countStyle: !1,
                    time: t,
                    jQelem: v,
                    txt: "{time}"
                })
            }
            var n = parseInt(t.data("confirmTime"))
              , o = t.data("pre")
              , r = s.current_time
              , d = t.find(".J-status-track-section")
              , c = d.data("estimated-make-time") + n
              , l = d.data("utime")
              , p = s.prepareStauts
              , u = CommConstants.shopCate
              , f = "food" == u ? "餐" : "货"
              , m = "food" == u ? "出餐" : "拣货";
            a && (l = parseInt((new Date).getTime() / 1e3));
            var h = '<div class="posa section-info"><span class="J-status-text"></span><span class="J-status-track-time color-main"></span><span class="J-status-track-time-done color-999"></span><div class="color-a2 J-status-tips" style="display: none;"></div></div><div class="posa section-info section-info-right"><span class="color-999 J-status-cancel" style="display:none"></span><button type="button" class="btn btn-default btn-sm J-status-ope" style="display:none">通知骑手取' + f + "</button></div>";
            d.empty().html(h);
            var y = d.find(".J-status-text")
              , v = d.find(".J-status-track-time")
              , w = d.find(".J-status-tips")
              , J = d.find(".J-status-track-time-done")
              , g = d.find(".J-status-cancel")
              , x = d.find(".J-status-ope");
            if (0 !== p) {
                if (1 === p)
                    x.show(),
                    w.show().text("请据实上报" + m + "状态"),
                    c > r ? (y.text(m + "时间倒计时："),
                    e.countDown({
                        countStyle: !0,
                        time: c - r,
                        jQelem: v,
                        txt: "{time}",
                        cb: function() {
                            i(1)
                        }
                    })) : i(r - c);
                else if (2 === p) {
                    if (0 === o) {
                        if (s.prepareDuration > 0 && 0 === n)
                            return;
                        y.text("本单" + m + "时长："),
                        J.html(e.formatSecond(s.prepareDuration - n))
                    } else
                        y.text("本单" + m + "状态："),
                        J.html(e.getTime("MM-dd hh:mm", s.prepareDuration) + " 完成" + m);
                    g.show().text("已" + m),
                    s.scanGun && w.show().text("出餐宝确认" + m)
                } else if (3 === p) {
                    if (y.text("本单备" + f + "时长："),
                    l > 0 && 0 === n)
                        return;
                    J.html(e.formatSecond(l - n)),
                    g.show().text("因订单取消，未" + m)
                }
                d.show()
            }
        },
        _displayStatusTrackInfo: function(t, s) {
            var a = parseInt(t.data("confirmTime"))
              , i = parseInt(t.data("pre"))
              , n = s.current_time
              , o = t.find(".J-prepare-countdown")
              , r = t.find(".J-prepare-down")
              , d = t.find(".J-status-track-section")
              , c = t.find(".J-delivery-section")
              , l = c.data("deliveryStatus")
              , p = s.prepareStauts
              , u = s.buttonTimeLimit
              , f = s.sendOutTime || 30
              , m = (s.displaySelfDispatchStatus,
            u - a)
              , h = CommConstants.shopCate
              , y = "food" == h ? "餐" : "货"
              , v = "food" == h ? "出餐" : "拣货"
              , w = t.data("isQiKe")
              , J = '<div class="posa section-info"><div>';
            J += '<span class="' + (0 === i ? "" : "hide") + '"><strong>备' + y + '时长</strong>&nbsp;&nbsp<span class="J-status-track-time color-main"></span></span>',
            J += '<strong class="' + (0 === i ? "hide" : "") + '">备' + y + "状态</strong>&nbsp;&nbsp",
            J += '<span class="J-status-track-time-done color-999"></span></div><div class="color-a2 J-status-tips" style="display:none"></div></div><div class="posa section-info section-info-right"><span class="J-status-done" style="display:none">已完成</span><span class="color-999 J-status-cancel" style="display:none">已取消</span><button type="button" class="btn btn-default btn-sm btn-stable J-status-ope" style="display:none" disabled>' + v + "完成</button></div>",
            d.empty().append(J);
            var g = d.find(".J-status-track-time")
              , x = d.find(".J-status-track-time-done")
              , b = d.find(".J-status-tips")
              , _ = d.find(".J-status-done")
              , I = d.find(".J-status-cancel")
              , S = d.find(".J-status-ope");
            if (0 !== p) {
                if (1 === p) {
                    if (S.show(),
                    o.show(),
                    0 === i) {
                        var k = "";
                        0 !== l || w ? (5 === l || 10 === l || 15 === l) && (k = "建议" + f + "分钟内" + v) : k = "建议" + f + "分钟内" + v + "，完成" + v + "可优先分配骑手",
                        b.show().text(k)
                    }
                    !function(t) {
                        e.countDown({
                            countStyle: !0,
                            time: 60 - (n - a),
                            jQelem: r,
                            txt: "{time}",
                            cb: function() {
                                t.remove()
                            }
                        })
                    }(o),
                    function(t) {
                        e.countDown({
                            countStyle: !1,
                            time: n - a,
                            jQelem: g,
                            txt: "{time}",
                            midTime: m,
                            midCb: function() {
                                t.prop("disabled", !1)
                            }
                        })
                    }(S)
                } else if (2 === p) {
                    if (_.show(),
                    0 === i) {
                        if (s.prepareDuration > 0 && 0 === a)
                            return;
                        x.html(e.formatSecond(s.prepareDuration - a))
                    } else
                        x.html(e.getTime("MM-dd hh:mm", s.prepareDuration) + " 完成" + v);
                    s.scanGun && b.show().text("出餐宝确认" + v)
                } else if (3 === p)
                    if (I.show(),
                    0 === i) {
                        if (s.prepareDuration > 0 && 0 === a)
                            return;
                        x.html(e.formatSecond(s.prepareDuration - a))
                    } else
                        x.html(e.getTime("MM-dd hh:mm", s.prepareDuration) + " 完成" + v);
                d.show()
            }
        },
        _displayExceptionTypeInfo: function(t, e) {
            var s = t.find(".J-status-track-warn")
              , a = t.find(".J-status-track-text")
              , i = t.find(".J-delivery-section")
              , n = e.prepareStauts
              , o = i.data("team-code")
              , r = e.dispatchExceptionType
              , d = 1001 == o || 1002 == o
              , c = 1004 == o
              , l = 3001 == o
              , p = 1003 == o || 2002 == o
              , u = CommConstants.shopCate
              , f = "food" == u ? "餐" : "货"
              , m = "food" == u ? "出餐" : "拣货"
              , h = t.find(".J-send-delivery")
              , y = t.find(".J-tip-operation");
            if (e.showSlefDeliveryButton && t.find(".J-send-dev-myself").show(),
            e.showDeliveryException && t.find(".J-complain-rider").show(),
            r) {
                switch (r) {
                case 1:
                    (d || l) && a.text("暂无骑手接单，是否自行配送？"),
                    p && a.text("暂无骑手接单，请增加小费试试或自行配送？");
                    break;
                case 2:
                    (d || c) && (1 == n ? a.text("骑手尚未到店，如已完成" + m + "请上报，并致电骑手催促到店") : 2 == n && a.text("骑手尚未到店，请重点关注此单配送情况"));
                    break;
                case 3:
                case 4:
                    1 == n ? a.text("骑手尚未取" + f + "，请尽快完成" + m + "并上报，以免造成餐损") : 2 == n && a.text("骑手尚未取" + f + "，请重点关注此单配送情况");
                    break;
                case 5:
                    p && a.text("依然无骑手接单，试试提高小费金额或自行配送？");
                    break;
                case 7:
                    a.text("因超重/金额过大，跑腿暂无法配送，请您自行完成配送"),
                    h.hide(),
                    y.hide()
                }
                s.is(":empty") || s.show()
            } else
                s.hide()
        },
        getCollectionState: function(e) {
            var s = [];
            e.each(function(t, e) {
                var a = {};
                a.wmOrderViewId = $(e).attr("data-view-id"),
                a.wmPoiId = $(e).data("poiId"),
                a.userId = $(e).data("userId"),
                s.push(a),
                $(e).addClass("has-load-data")
            }),
            $.ajax({
                url: t.order.queryPoiFavorites,
                data: {
                    userIdAndPoiIds: JSON.stringify(s)
                },
                success: function(t) {
                    if (0 == t.code)
                        for (var t = t.data, e = 0, s = t.length; s > e; e++)
                            t[e].favorites && $("#" + t[e].wmOrderViewId).find(".J-favorite").show()
                }
            })
        }
    }
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0,
    paths: {}
}),
define("module/order/check_delivery_map", ["lib/GDMap.source", "module/interface", "widgets/normal_dialog", "util/utils"], function(i, t, e, a) {
    var r = function() {
        this.poiPoint = null,
        this.orderPoint = null,
        this.deliverPoint = null,
        this.deliverArrivalPoint = null,
        this.$targetDom = null,
        this.map = null,
        this.$dialog = null,
        this.wmPoiId = "",
        this.wmOrderViewId = "",
        this.deliverStatus = {},
        this.deliverTranceData = [],
        this.getDataNumber = 0,
        this.displayEvaluation = null,
        this.isDeliverClickArrival = !1
    };
    return r.prototype = {
        getDeliverTranceStatus: function() {
            var i = this;
            $.ajax({
                url: " /v2/order/receive/r/distribute/getTraceInfo",
                type: "get",
                data: {
                    wmOrderViewId: this.wmOrderViewId,
                    wmPoiId: this.wmPoiId
                },
                success: function(t) {
                    var e = t.data
                      , r = e[e.length - 1];
                    return i.deliverTranceData = e,
                    e.length > 0 ? (i.deliverPoint = {
                        lat: r.lat / 1e6,
                        lng: r.lng / 1e6
                    },
                    void i.getDataNumber++) : void a.showTip("该订单暂不支持查看骑手轨迹", "error")
                },
                error: function(t) {
                    i.getDataNumber = 999,
                    a.showTip("未获取到骑手轨迹信息，请刷新！" | t.msg, "error")
                }
            })
        },
        getDeliverStatus: function() {
            var i = this;
            $.ajax({
                url: " /v2/order/receive/r/distribute/getArrivedStatus",
                type: "get",
                data: {
                    wmOrderViewId: this.wmOrderViewId,
                    wmPoiId: this.wmPoiId
                },
                success: function(t) {
                    i.deliverStatus = t.data,
                    i.getDataNumber++
                },
                error: function(t) {
                    a.showTip("未获取到骑手信息，请刷新！" | t.msg, "error"),
                    i.getDataNumber = 999
                }
            })
        },
        drawTrance: function() {
            for (var i = this.deliverTranceData, t = i.length, e = [], a = 0; t > a; a++)
                e.push([i[a].lng / 1e6, i[a].lat / 1e6]);
            var r = new AMap.Polyline({
                path: e,
                strokeColor: "#06C1AE",
                strokeOpacity: 1,
                strokeWeight: 5,
                strokeStyle: "dashed",
                strokeDasharray: [10, 5]
            });
            this.map.showPolyline(r)
        },
        bindEvent: function() {
            this.$targetDom.find(".J-check-map").unbind("click").bind("click", this.updataData.bind(this))
        },
        updataData: function() {
            this.getDataNumber = 0,
            this.getDeliverStatus(),
            this.getDeliverTranceStatus(),
            this.openMapModal();
            var i = a.url2Cid();
            i && a.reportMC("b_shangou_online_e_vb8s316h_mc", i)
        },
        openMapModal: function() {
            2 === this.getDataNumber ? this.createModal() : this.getDataNumber < 2 && setTimeout(this.openMapModal.bind(this), 500)
        },
        drawMap: function() {
            var i = this.deliverStatus.locationInfo
              , t = this.deliverStatus.avatar
              , e = this.deliverStatus.shopPicUrl
              , r = this.poiPos;
            return window.AMap ? (this.map = new WAIMAICOS.GDMap({
                center: [r.lng, r.lat],
                zoom: 13,
                container: "j-map-container"
            }).addToolBar(),
            this.isDeliverClickArrival && i && (this.deliverArrivalPoint = new AMap.LngLat(i.longitude / 1e6,i.latitude / 1e6),
            this.map.addMarker(this.deliverArrivalPoint, '<div class="deliver-arrival-wrap"><img class="deliver-arrival-station" src="/static/62416314/imgs/deliver_arrival_tip.png" alt=""></div>', null, null, {
                x: -80,
                y: -70
            })),
            t ? this.deliverPoint && this.map.addMarker(this.deliverPoint, '<div class="map-deliver-img"><img src="' + t + '" /></div>', null, null, {
                x: -37,
                y: -90
            }) : this.deliverPoint && this.map.addMarker(this.deliverPoint, '<img class="deliver-map-img" src="/static/62416314/imgs/deliver.png" />', null, null, {
                x: -39,
                y: -90
            }),
            this.map.addMarker(this.orderPoint, '<img class="user-map-img" src="/static/62416314/imgs/user.png" />', null, null, {
                x: -30,
                y: -60
            }),
            e ? this.map.addMarker(this.poiPoint, '<div class="map-img"><img src="' + e + '" /></div>', null, null, {
                x: -28,
                y: -68
            }) : this.map.addMarker(this.poiPoint, '<img class="user-map-img" src="/static/62416314/imgs/customer.png" />', null, null, {
                x: -30,
                y: -60
            }),
            this.drawTrance(),
            void this.map.getMap().setFitView()) : void a.showTip("地图加载失败，请刷新页面后重试！", "error")
        },
        topAlert: function() {
            var i = ""
              , t = this.deliverStatus.limit
              , e = this.deliverStatus.distance;
            if (1 === this.deliveryObj.getEvaluationStatus() && e > t && this.isDeliverClickArrival) {
                var a = t >= 1e3 ? (t / 1e3).toFixed(1) + "km" : t + "m";
                i += '<div class="alert alert-dismissible">骑手点击到店时距离门店超过' + a + '，可在订单送到后评价骑手进行反馈！<span class="J-mapVote-delivery modal-vote-delivery">去评价 ></span></div>'
            }
            return i
        },
        createModal: function() {
            var i = this.topAlert();
            i += '<div id="j-map-container" class="map-container" style="height:400px;"></div>',
            this.$dialog = e({
                title: "查看地图",
                content: i,
                btns: [],
                "class": "check-map-modal",
                size: "md"
            }),
            this.bindEvaluationEvent(),
            this.drawMap()
        },
        bindEvaluationEvent: function() {
            if (this.$dialog.find(".J-mapVote-delivery").length > 0) {
                var i = this;
                this.$dialog.delegate(".J-mapVote-delivery", "click", function() {
                    i.$dialog.modal("hide"),
                    i.deliveryObj.$evaluationBtn.click()
                })
            }
        },
        init: function(i) {
            var t = i.$targetDom
              , e = t.find(".j-show-map");
            this.wmPoiId = i.wmPoiId,
            this.wmOrderViewId = i.wmOrderViewId,
            this.$targetDom = t,
            this.deliveryObj = i;
            var a = {
                lat: e.data("poiLat") / 1e6,
                lng: e.data("poiLng") / 1e6
            }
              , r = {
                lat: e.data("orderLat") / 1e6,
                lng: e.data("orderLng") / 1e6
            };
            window.AMap && (this.poiPoint = new AMap.LngLat(a.lng,a.lat),
            this.orderPoint = new AMap.LngLat(r.lng,r.lat)),
            this.poiPos = a,
            (15 === this.deliveryObj.deliveryStatus || 20 === this.deliveryObj.deliveryStatus || 40 === this.deliveryObj.deliveryStatus) && (this.isDeliverClickArrival = !0),
            this.bindEvent()
        }
    },
    {
        loadMapData: function(i) {
            var t = new r;
            t.init(i)
        }
    }
});
define("module/order/order_list_dom_time", [], function() {
    "use strict";
    return function(s, a, n, o) {
        var r = ""
          , c = n || ""
          , l = c.substr(11, 5)
          , i = c.substr(5, 11)
          , p = o || ""
          , e = p.substr(11, 5);
        if (0 === s)
            r += 3 === a ? '预定 <span class="color-main">' + i + " 送达</span>" : 2 === a ? '预定明日 <span class="color-main">' + l + " 送达</span>" : 1 === a ? '预定今日 <span class="color-main">' + l + " 送达</span>" : '立即送达 <span class="color-main">建议 ' + e + " 前送达</span>";
        else if (1 === s) {
            var t = CommConstants.shopCategoryObj.pickupG;
            r += 3 === a ? '预计 <span class="color-main">' + i : 2 === a ? '预计明日 <span class="color-main">' + l : 1 === a ? '预计今日 <span class="color-main">' + l : '预计今日 <span class="color-main">' + e,
            r += " 到店" + t + "</span>"
        } else
            1001 === s && (r += " 下单后" + n + "小时内发货</span>");
        return r
    }
});
define("module/order/order_delivery_init", ["module/cookie", "widgets/status_button", "module/interface", "util/utils", "module/order/order_status", "module/order/order_slidebar", "module/order/order_other_info", "module/order/check_delivery_map", "module/order/order_list_dom_time"], function(i, s, t, e, a, r, o, h, n) {
    function d(i, s) {
        var t = $("#" + i)
          , a = t.find(".J-delivery-section");
        if (this.prop = i,
        this.data = s,
        this.orderStatus = t.data("status"),
        this.poiCross = t.data("cross"),
        this.b2cPoi = t.data("b2cPoi"),
        this.poiFirstTag = t.data("poiFirstTag"),
        this.b2cPoiCross = this.poiCross && this.b2cPoi && 22 === this.poiFirstTag,
        this.orderLogisticsCode = t.data("deliveryCode"),
        this.thirdLogisticsCode = t.data("thirdDeliveryCode"),
        this.payStatus = t.data("payStatus"),
        this.pickType = t.data("pickType"),
        this.pre = t.data("pre"),
        this.confirmTime = t.data("confirmTime"),
        this.wmPoiId = t.data("poiId"),
        this.wmOrderViewId = t.attr("data-view-id"),
        this.confirmDeliveryStatus = t.data("confirmDelivery"),
        this.hasWarehouse = t.attr("data-hasWarehouse"),
        this.ownRights = t.data("ownRights"),
        1 === s.ptGray && s.shippingFeeDetailVo) {
            var r = s.shippingFeeDetailVo;
            this.shippingFee = r.shippingFee,
            this.tipAmount = r.tipAmount
        } else
            this.shippingFee = s.poi_shipping_fee,
            this.tipAmount = s.tip_amount;
        this.orderLogisticsCode === S ? this.logisticsCode = S : this.orderLogisticsCode === g ? this.logisticsCode = g : this.logisticsCode = s.logistics_code,
        this.subLogisticsCode = s.subLogisticsCode,
        this.deliveryStatus = s.logistics_status,
        this.preCheckJuHeMsg = s.preCheckJuHeMsg,
        this.hasJuheAndZB = s.hasJuheAndZB,
        a.data("tempDeliveryStatus") && (this.deliveryStatus = +a.data("tempDeliveryStatus")),
        this.dispatcherPhone = s.dispatcher_phone,
        this.dispatcherName = s.dispatcher_name,
        this.isKs = s.isKS,
        this.isHhKS = s.hhKS,
        this.isPtGray = s.ptGray,
        this.selfDispatch = s.self_dispatch,
        this.latestDeliveryTime = s.latest_delivery_time,
        this.dispatchCancelAllow = s.dispatch_cancel_allow,
        this.waitingTime = s.waiting_time,
        this.assignTime = s.assignTime,
        this.delayPushSecond = s.delay_push_second,
        this.assignDegrade = s.assignDegrade,
        this.currentTime = s.currentTime,
        this.expressInfo = s.expressInfo,
        this.litterFeeShow = !1,
        this.evaluationStatus = 0,
        this.hasGetOrderStatus = !1,
        this.isShowTodayText = !(e.getTime("MM.dd", parseInt(this.latestDeliveryTime)) === e.getTime("MM.dd", parseInt(this.confirmTime))),
        this.isTipGray = !1,
        this.$targetDom = t,
        this.$orderDom = a,
        this.$planFeeDom = t.find(".J-delivery-planfee"),
        this.$addShippingBtn = t.find(".J-tip-operation"),
        this.$evaluationBtn = t.find(".J-vote-delivery"),
        this.$deliveryStationDom = a.find(".J-delivery-station"),
        this.$sendBySelfBtn = a.find(".J-send-delivery-myself"),
        this.$changeSendBySelfBtn = a.find(".J-send-dev-myself"),
        this.$sendBtn = a.find(".J-send-delivery"),
        this.$sendJuHeBtn = a.find(".J-send-juhe-delivery"),
        this.$statusTimeAreaDom = a.find(".J-timeArea"),
        this.$cancelDeliveryBtn = a.find(".J-cancel-delivery"),
        this.$deliveryStatusArea = a.find(".J-delivery-status"),
        this.$deliveryOperationDom = a.find(".J-delivery-operation"),
        this.$statusInfoDom = a.find(".J-status-info"),
        this.$sendDeliveryText = a.find(".J-send-delivery-text"),
        this.$orderStausList = a.find(".J-order-status-list"),
        this.$checkMap = a.find(".J-check-map"),
        this.$displayDeliverList = a.find(".J-display-deliveryList"),
        this.$changeLogisticsBtn = a.find(".J-change-logistics"),
        this.$inputRiderBtn = a.find(".J-sc-input-rider"),
        this.$confirmDelivery = a.find(".J-confirm-delivery"),
        t.data("logisticsCode", this.logisticsCode),
        t.data("isQiKe", this.isQiKe())
    }
    function l(i) {
        shippingFeeArr.length && c(shippingFeeArr, i),
        evaluationArr.length && p(evaluationArr, i)
    }
    function p(i, s) {
        $.ajax({
            url: t.order.getDistributionEvaluation,
            data: {
                orderInfos: JSON.stringify(i)
            },
            success: function(i) {
                if (0 === i.code) {
                    var t = i.evaluationList;
                    t && t.length && t.forEach(function(i) {
                        s[i.wmOrderViewId] && s[i.wmOrderViewId].changeEvaluationBtn()
                    })
                }
            }
        })
    }
    function c(i, s) {
        $.ajax({
            url: t.order.getShippingFee,
            data: {
                orderInfos: JSON.stringify(i)
            },
            success: function(i) {
                if (0 === i.code)
                    for (var t = i.data, e = 0, a = t.length; a > e; e++)
                        s[t[e].wm_order_view_id] && s[t[e].wm_order_view_id].changeShippingFee(t[e].shipping_fee)
            }
        })
    }
    function u(i) {
        var s = [];
        return $(i).each(function(i, t) {
            var e = {}
              , a = $(t);
            e.wmOrderViewId = a.attr("data-view-id"),
            e.wmPoiId = a.data("poiId"),
            e.logisticsStatus = a.data("deliveryStatus"),
            e.logisticsCode = a.data("deliveryCode"),
            s.push(e)
        }),
        {
            orderInfos: JSON.stringify(s)
        }
    }
    var T = "1003"
      , S = "0000"
      , m = ["00009002", "00009003"]
      , g = "00005001"
      , v = ["4001", "40011001", "40012002", "4011", "40111001", "40112002", "4012", "40121001", "40122002"];
    return QIKETip = ["40011001", "40012002", "40111001", "40112002", "40121001", "40122002", "40011006", "40111006", "40121006"],
    STATUS = {
        INIT: -1,
        SENDING: -10,
        PREORDER: -20,
        WAITING: 0,
        WAITING_2: 5,
        ACCEPTED: 10,
        ARRIVING: 15,
        DELIVERING: 20,
        DONE: 40,
        CANCELLED: 100,
        COLLECTED: 21,
        TRANSPORTATION: 22,
        ARRIVED: 23,
        DELIVERY: 24
    },
    oneDay = 864e5,
    shippingFeeArr = [],
    evaluationArr = [],
    showDispatcherPhone = !1,
    d.prototype = {
        init: function() {
            this.updateDomData(),
            1 !== this.pickType && (this.$orderDom.show(),
            this.displaySelfSendCustomer(),
            this.isTipAmountGray(),
            this.displaySelfSendBtn(),
            this.displayDispatcher(),
            this.displayEvaluation(),
            this.displaySendBtn(),
            this.displaySendJuHeBtn(),
            this.displayTimeArea(),
            this.displayCancelBtn(),
            this.displayOperationArea(),
            this.displayDeliveryTextArea(),
            this.displaySendDeliveryText(),
            this.displayCheckMap(),
            this.displayDeliverListBtn(),
            this.displayChangeLogisticsBtn(),
            this.displayChangeScRiderBtn(),
            this.bindEvent()),
            this.displayOrderStatus(),
            this.displayConfirmDeliveryBtn()
        },
        bindEvent: function() {
            this.$displayDeliverList.on("click", this.initOrderStatusList.bind(this));
            var i = e.url2Cid();
            i && e.reportMC("b_shangou_online_e_bwwlrbbc_mc", i)
        },
        getDeliveryText: function(i) {
            var s = 0 == this.pre ? "商家发起配送" : "送达前一小时自动分配骑手"
              , t = {
                "-5": "商家已接单",
                1: s,
                5: "已分配骑手",
                10: "骑手已接单",
                15: "骑手已到店",
                20: "骑手已" + CommConstants.shopCategoryObj.pickupG,
                40: "订单已送达",
                100: "配送已取消",
                200: "已改派骑手",
                21: "骑手已集餐",
                22: "餐品运输中",
                23: "餐品到达配送点",
                24: "餐品派送中"
            };
            return t[i] || ""
        },
        getDeliveryTextOld: function(i) {
            var s = "商家发起配送";
            this.logisticsCode === g && (s = "配送中");
            var t = 0 == this.pre ? s : "送达前一小时自动分配骑手"
              , e = {
                "-5": "商家已接单",
                0: t,
                1: t,
                5: "已分配骑手",
                10: "骑手已接单",
                15: "骑手已到店",
                20: "骑手已" + CommConstants.shopCategoryObj.pickupG,
                40: "订单已送达",
                100: "配送已取消",
                200: "已改派骑手"
            };
            return e[i] || ""
        },
        setShippingFeeValue: function() {
            var i = this.$planFeeDom
              , s = this.deliveryStatus
              , t = this.isPtGray
              , e = 0
              , a = this.tipAmount
              , r = this.shippingFee
              , o = this.data.shippingFeeDetailVo;
            if (t && o && s !== STATUS.INIT && s !== STATUS.PREORDER && s !== STATUS.CANCELLED) {
                e = o.payAmount,
                a = o.tipAmount;
                var h = " 运费实付：&yen;" + e;
                a && (h += "（小费：&yen;" + a + "） "),
                h += '<a href="javascript:void(0);" class="J-check-detail" data-shipping-fee-detail-vo = ' + JSON.stringify(o) + "> 明细</a>",
                this.$orderDom.data("shippingFee", e),
                i.html(h)
            } else if (null !== r && r > -1) {
                var h = " ";
                1 === this.data.isKS || "2002" == this.logisticsCode || this.isQiKeTip() || (h += '配送费<i class="ct-lred" data-shipping-fee="' + r + '">' + r + "</i>元"),
                h += ' 小费<span class="J-ship-tip">' + (a || 0) + "</span>元",
                this.$orderDom.data("shippingFee", r),
                i.html(h)
            } else
                i.text("获取运费失败，请刷新")
        },
        getDispatcherHtml: function() {
            var i = []
              , s = this.data;
            if (s.dispatcher_name && (i.push('<strong class="mr10 color-333">' + s.dispatcher_name + "</strong>"),
            s.dispatchTeam && i.push('<strong class="mr10">' + s.dispatchTeam + "</strong>")),
            i.push('<span class="color-666 posr J-drop-parent">'),
            showDispatcherPhone)
                s.dispatcher_phone && (i.push(s.dispatcher_phone),
                (s.org_leader_phone || s.org_emergency_phone) && (i.push(' <i class="glyphicon glyphicon-triangle-bottom arrow-down drop-arrow font-12 J-display-more J-display-more-phone"></i>'),
                i.push('<div class="posa other-phone drop-con">'),
                s.org_leader_phone && i.push("<div>站点：" + s.org_leader_phone + "</div>"),
                s.org_emergency_phone && i.push("<div>站点备用：" + s.org_emergency_phone + "</div>"),
                i.push("</div>")));
            else if (s.dispatcher_name) {
                var t = this.logisticsCode === g ? "站点" : "骑手";
                i.push('<a href="javascript:void(0);" class="J-display-more J-display-more-phone J-check-phone">查看' + t + "电话</a>"),
                i.push('<span class="J-dis-phone-area"></span>')
            }
            return i.push("</span>"),
            i.join("")
        },
        getDispatcherHtml2: function() {
            var i = []
              , s = this.data;
            return i.push('<strong class="mr10 color-333">发起配送</strong>'),
            i.push('<span class="color-666 posr J-drop-parent">'),
            showDispatcherPhone ? s.org_leader_phone && (i.push("站点:" + s.org_leader_phone),
            s.org_emergency_phone && (i.push(' <i class="glyphicon glyphicon-triangle-bottom arrow-down drop-arrow font-12 J-display-more J-display-more-phone"></i>'),
            i.push('<div class="posa other-phone drop-con">'),
            i.push("<div>站点备用：" + s.org_emergency_phone + "</div>"),
            i.push("</div>"))) : s.dispatcher_name && (i.push('<a href="javascript:void(0);" class="J-display-more J-display-more-phone J-check-phone">查看骑手电话</a>'),
            i.push('<span class="J-dis-phone-area"></span>')),
            i.push("</span>"),
            i.join("")
        },
        getStatusListText: function(i) {
            return statusText = {
                "-5": "接",
                1: "",
                10: "骑",
                15: "店",
                20: "",
                40: "收",
                100: "",
                200: ""
            },
            statusText[i] ? statusText[i] : ""
        },
        getOrderStatusListHtml: function(i) {
            for (var s, t, a = i.length, r = "", o = 0; a > o; o++)
                s = i[o].status,
                t = i[o].ctime,
                t = e.getTime("MM.dd hh:mm", parseInt(t)),
                r += '<li class="status-list-item"><span class="order-status-time">' + t + '</span><span class="status-icon-text">' + this.getDeliveryText(s) + '<span class="order-status-point"></span>' + (1 === a ? "" : '<span class="icon-line"></span>') + "</span></li>";
            return r
        },
        updateDomData: function() {
            var i = this.data
              , s = this.$orderDom;
            this.$targetDom.data("assignTime", i.assignTime),
            this.$targetDom.data("delayPushSecond", i.delayPushSecond),
            s.data("teamName", i.logistics_name),
            s.data("teamCode", this.logisticsCode),
            s.data("teamId", i.logistics_id),
            s.data("tipAmount", i.tip_amount),
            s.data("shippingFee", this.shippingFee),
            s.data("deliveryStatus", i.logistics_status),
            s.data("dispatcherPhone", i.dispatcher_phone),
            s.data("dispatcherName", i.dispatcher_name),
            s.data("isKs", i.isKS),
            s.data("hhKS", i.hhKS),
            s.data("isPtGray", i.ptGray),
            s.data("hasJuheAndZB", i.hasJuheAndZB),
            this.$evaluationBtn.data("status", this.evaluationStatus),
            this.expressInfo && (s.data("isExpress", this.expressInfo.isExpress),
            s.data("logisticsNo", this.expressInfo.logisticsNo),
            s.data("logisticsPlatName", this.expressInfo.logisticsPlatName),
            s.data("logisticsPlatCode", this.expressInfo.logisticsPlatCode),
            s.data("riderPhone", this.expressInfo.riderPhone),
            s.data("riderName", this.expressInfo.riderName),
            s.data("multiExpressInfo", this.expressInfo.multiExpressInfo),
            1 == this.expressInfo.isExpress && this.$targetDom.find(".J-order-time").html(n(1001, null, String(this.expressInfo.expressHour))))
        },
        getDateText: function(i) {
            var s = "";
            if (e.getTime("MM.dd", parseInt(i)) === e.getTime("MM.dd")) {
                var t = this.isShowTodayText ? "今日 hh:mm" : "hh:mm";
                s = e.getTime(t, parseInt(i))
            } else
                s = e.getTime("MM.dd hh:mm", parseInt(i));
            return s
        },
        changeEvaluationBtn: function() {
            this.evaluationStatus = 2,
            this.$evaluationBtn.text("查看评价"),
            this.$evaluationBtn.data("status", this.evaluationStatus)
        },
        changeShippingFee: function(i) {
            this.shippingFee = i,
            this.setShippingFeeValue()
        },
        getEvaluationStatus: function() {
            var i = this.$evaluationBtn.data("status");
            return i
        },
        displayAddShippingFeeBtn: function() {
            var i = this.$addShippingBtn
              , s = this.deliveryStatus
              , t = this.logisticsCode
              , e = this.hasJuheAndZB;
            i.hide(),
            this.isQiKeTip() && this.isTipGray && (s === STATUS.CANCELLED || s === STATUS.INIT || s === STATUS.PREORDER || s === STATUS.WAITING || s === STATUS.WAITING_2) && (this.tipAmount > 0 ? i.text("修改小费") : i.text("加小费"),
            i.show(),
            i.data("status", s)),
            this.isQiKe() || (this.isExpress() || t !== T && "30012002" != t && "2002" != t && !this.isHhKS || s !== STATUS.CANCELLED && s !== STATUS.INIT && s !== STATUS.PREORDER && s !== STATUS.WAITING && s !== STATUS.WAITING_2 || (this.tipAmount > 0 ? i.text("修改小费") : i.text("加小费"),
            i.show(),
            i.data("status", s)),
            !e || s !== STATUS.INIT && s !== STATUS.CANCELLED || (this.tipAmount > 0 ? i.text("修改小费") : i.text("加小费"),
            i.show(),
            i.data("status", s)))
        },
        displaySelfSendCustomer: function() {
            if (this.logisticsCode === S && !this.isHaikui()) {
                var i = CommConstants.shopCategoryObj
                  , s = i.MerchandiseDeliveryG
                  , t = i.deliveryG
                  , a = this.orderStatus
                  , r = this.deliveryStatus
                  , o = this.$orderDom
                  , h = this.hasWarehouse;
                if (4 === a && r === STATUS.INIT) {
                    var n = this.b2cPoiCross ? "待清关" : "待" + t;
                    o.find(".J-delivery-display").text(n)
                } else
                    (4 === a && (r === STATUS.WAITING || r === STATUS.DELIVERING || r === STATUS.DONE || r === STATUS.ARRIVING || r === STATUS.ACCEPTED) || 8 === a || 9 === a) && o.find(".J-delivery-display").text(s);
                if ((4 == a || 8 == a) && r != STATUS.INIT) {
                    if (this.expressInfo && this.expressInfo.riderName && this.expressInfo.riderPhone) {
                        var d = '<div class="color-a2">骑手姓名：' + this.expressInfo.riderName + '</div><div class="color-a2">骑手电话：' + this.expressInfo.riderPhone + "</div>";
                        this.expressInfo.logisticsPlatName && (d = '<div class="color-a2">配送平台：' + this.expressInfo.logisticsPlatName + "</div>" + d),
                        o.find(".J-delivery-display").html(d)
                    }
                    if (this.isExpress() && this.hasExpressed())
                        if (1 == h) {
                            var l = {}
                              , p = this.expressInfo.multiExpressInfo;
                            p.forEach(function(i, s) {
                                i.warehouseId && (l[i.warehouseId] || (l[i.warehouseId] = {
                                    id: i.warehouseId,
                                    list: []
                                }),
                                l[i.warehouseId].list.push(i))
                            });
                            for (var c in l) {
                                for (var u = l[c].list.length, d = '<div class="J-package-content clearfix">', T = 0; u > T; T++)
                                    d += '<div class="package-item"><div class="package-title">包裹' + (T + 1) + '</div><div class="color-a2">物流平台：' + l[c].list[T].logisticsPlatName + '</div><div class="color-a2">物流单号：' + l[c].list[T].logisticsNo + '</div><div class="color-a2">发货时间：' + e.getTime("MM-dd hh:mm:ss", this.expressInfo.deliveryTime) + "</div></div>";
                                d += "</div>",
                                o.each(function(i, s) {
                                    var t = $(s).attr("data-delivery-id").split("_")[1];
                                    l[t] ? $(s).data("multiExpressInfo", l[t].list) : $(s).data("multiExpressInfo", null)
                                });
                                var m = this.prop + "_" + c;
                                $("div[data-delivery-id='" + m + "']").find(".J-delivery-display").html(d),
                                this.$deliveryOperationDom.addClass("delivery-ope-package")
                            }
                        } else {
                            for (var u = this.expressInfo.multiExpressInfo.length, d = '<div class="J-package-content clearfix">', T = 0; u > T; T++)
                                d += '<div class="package-item"><div class="package-title">包裹' + (T + 1) + '</div><div class="color-a2">物流平台：' + this.expressInfo.multiExpressInfo[T].logisticsPlatName + '</div><div class="color-a2">物流单号：' + this.expressInfo.multiExpressInfo[T].logisticsNo + '</div><div class="color-a2">发货时间：' + e.getTime("MM-dd hh:mm:ss", this.expressInfo.deliveryTime) + "</div></div>";
                            d += "</div>",
                            this.$orderDom.find(".J-delivery-display").html(d),
                            this.$deliveryOperationDom.addClass("delivery-ope-package")
                        }
                }
            }
        },
        displayDeliverListBtn: function() {
            var i = this.deliveryStatus;
            this.$displayDeliverList.hide(),
            (this.logisticsCode !== S || this.isHaikui()) && i !== STATUS.INIT && i !== STATUS.SENDING && i !== STATUS.PREORDER && this.$displayDeliverList.show()
        },
        displayFeeDetail: function() {
            var i = this.deliveryStatus
              , s = this.$planFeeDom;
            s.show(),
            this.isQiKeTip() && this.isTipGray && (i === STATUS.CANCELLED || i === STATUS.INIT || i === STATUS.PREORDER || i === STATUS.WAITING || i === STATUS.WAITING_2) && (this.litterFeeShow = !0,
            this.setShippingFeeValue(),
            shippingFeeArr.push({
                code: 12,
                logisticsStatus: i,
                wmOrderViewId: this.wmOrderViewId,
                wmPoiId: this.wmPoiId
            })),
            (this.logisticsCode === T || "30012002" == this.logisticsCode || "2002" == this.logisticsCode || this.isHhKS) && (this.litterFeeShow = !0,
            this.setShippingFeeValue(),
            (i === STATUS.INIT || i === STATUS.PREORDER || i === STATUS.CANCELLED) && shippingFeeArr.push({
                code: 12,
                logisticsStatus: i,
                wmOrderViewId: this.wmOrderViewId,
                wmPoiId: this.wmPoiId
            })),
            this.hasJuheAndZB && i === STATUS.INIT && (this.litterFeeShow = !0,
            this.setShippingFeeValue(),
            shippingFeeArr.push({
                code: 12,
                logisticsStatus: i,
                wmOrderViewId: this.wmOrderViewId,
                wmPoiId: this.wmPoiId
            }))
        },
        displayEvaluation: function() {
            var i = this.$evaluationBtn
              , s = this.deliveryStatus
              , t = this.hasJuheAndZB;
            return i.hide(),
            (s === STATUS.ACCEPTED || s === STATUS.ARRIVING || s === STATUS.DELIVERING || s === STATUS.DONE || s === STATUS.CANCELLED) && this.dispatcherName && (this.logisticsCode !== g || s === STATUS.CANCELLED && t) ? (evaluationArr.push({
                code: 12,
                logisticsStatus: s,
                wmOrderViewId: this.wmOrderViewId,
                wmPoiId: this.wmPoiId
            }),
            i.show(),
            this.evaluationStatus = 1,
            this.$evaluationBtn.data("status", this.evaluationStatus),
            !0) : !1
        },
        displayOrderStatus: function() {
            a.checkOrderStatus({
                wmOrderViewId: this.wmOrderViewId,
                wmPoiId: this.wmPoiId,
                b2cPoiCross: this.b2cPoiCross,
                code: 12,
                logisticsStatus: this.deliveryStatus
            })
        },
        displaySendDeliveryText: function() {
            var i = this.$sendDeliveryText
              , s = this.deliveryStatus;
            i.show(),
            (this.logisticsCode !== S || this.isHaikui()) && (s === STATUS.WAITING || s === STATUS.WAITING_2 || s === STATUS.INIT || s === STATUS.PREORDER || s === STATUS.CANCELLED && !this.dispatcherName ? (i.show(),
            s === STATUS.WAITING && this.assignTime > 0 && 0 == this.pre && i.find("strong").text("正在分配骑手"),
            s === STATUS.WAITING_2 && i.find("strong").text("待骑手接单")) : i.hide()),
            this.logisticsCode === S && i.find("strong").text("配送信息")
        },
        displayDispatcher: function() {
            var i = this.$deliveryStationDom
              , s = this.deliveryStatus
              , t = this.logisticsCode && this.logisticsCode.indexOf("3001") > -1;
            i.show(),
            (this.logisticsCode !== S || this.isHaikui()) && (s === STATUS.INIT || s === STATUS.PREORDER ? i.hide() : s === STATUS.WAITING || s === STATUS.WAITING_2 ? t ? i.html(this.getDispatcherHtml2()) : this.logisticsCode === g ? i.html(this.getDispatcherHtml()) : i.hide() : i.html(this.getDispatcherHtml()))
        },
        displaySelfSendBtn: function() {
            var i = this.deliveryStatus
              , s = this.$sendBySelfBtn
              , t = this.$changeSendBySelfBtn
              , e = this.hasWarehouse;
            if (s.hide(),
            !this.isQiKe())
                if (this.logisticsCode === S) {
                    var a = this;
                    1 == e ? s.each(function(i, s) {
                        a.hasExpressedWarehouse(s) || $(s).parents(".J-delivery-section").data("tempDeliveryStatus") || (t.hide(),
                        $(s).show())
                    }) : 4 === this.orderStatus && i === STATUS.INIT && (t.hide(),
                    s.show())
                } else
                    this.isQiKe() && 4 === this.orderStatus && i === STATUS.INIT ? (t.hide(),
                    s.show()) : this.isQiKe() || 1 !== this.selfDispatch || i !== STATUS.INIT && i !== STATUS.PREORDER && i !== STATUS.CANCELLED || (t.hide(),
                    s.show())
        },
        displaySendBtn: function() {
            var i = this.$sendBtn
              , s = this.deliveryStatus
              , t = this.hasJuheAndZB;
            i.attr("data-own-rights", this.ownRights),
            i.hide(),
            this.isQiKe() || (t || this.logisticsCode !== S && this.logisticsCode !== g && !this.isExpress()) && (s === STATUS.INIT || s === STATUS.PREORDER || s === STATUS.CANCELLED) && i.show()
        },
        displaySendJuHeBtn: function() {
            var i = this.$sendJuHeBtn
              , s = this.deliveryStatus
              , t = this.preCheckJuHeMsg
              , e = this.hasJuheAndZB;
            i.hide(),
            (this.logisticsCode === g || e) && (s === STATUS.INIT || s === STATUS.PREORDER || s === STATUS.CANCELLED) && (i.show(),
            t && i.addClass("disabled").attr("data-original-title", t).tooltip())
        },
        displayTimeArea: function() {
            var i = this.$statusTimeAreaDom
              , s = this.deliveryStatus;
            if (i.hide(),
            (this.logisticsCode !== S || this.isHaikui()) && s !== STATUS.WAITING && s !== STATUS.SENDING && s !== STATUS.INIT && s !== STATUS.PREORDER) {
                var t = this.getDateText(this.latestDeliveryTime);
                i.text(t + " ").show()
            }
        },
        displayCancelBtn: function() {
            var i = this.$cancelDeliveryBtn
              , s = this.$deliveryStatusArea
              , t = this.$sendDeliveryText
              , a = this.deliveryStatus
              , r = this.logisticsCode
              , o = this.dispatchCancelAllow
              , h = this.waitingTime
              , n = this.assignTime
              , d = this.delayPushSecond
              , l = this.assignDegrade
              , p = this.currentTime
              , c = this.latestDeliveryTime
              , u = p - c
              , m = this.$orderDom;
            if (i.hide(),
            s.show(),
            r !== S && r !== g && !this.isQiKe()) {
                var v = t.find(".J-countdown");
                if (v.length && v.remove(),
                a === STATUS.WAITING || a === STATUS.WAITING_2) {
                    t.append($('<span class="J-countdown color-main"></span>'));
                    var f = s.parents(".order");
                    if (v = f.find(".J-countdown"),
                    r === T && o && 1 !== this.isKs && i.show(),
                    a === STATUS.WAITING && l !== !0)
                        if (n > 0 && 0 == this.pre) {
                            if (d > 0) {
                                var I = Math.ceil(d / 60);
                                v.html('<span style="margin-left: 4px;margin-right: 6px;">预计耗时</span><span>' + I + "分钟</span>")
                            }
                        } else
                            h >= 0 && !function(i) {
                                e.countDown({
                                    countStyle: !1,
                                    time: h,
                                    jQelem: v,
                                    txt: "已等待 <span>{time}</span>",
                                    midTime: 900,
                                    midCb: function() {
                                        "1040" != m.data("shipping-service") && i.show()
                                    }
                                })
                            }(i);
                    a === STATUS.WAITING_2 && u >= 0 && !function(i) {
                        e.countDown({
                            countStyle: !1,
                            time: u,
                            jQelem: v,
                            txt: "已等待 <span>{time}</span>",
                            midTime: 900,
                            midCb: function() {
                                "1040" != m.data("shipping-service") && i.show()
                            }
                        })
                    }(i)
                }
                (a == STATUS.ACCEPTED || a == STATUS.ARRIVING || a == STATUS.DELIVERING) && r == T && o && i.show()
            }
            if (r === S) {
                var v = t.find(".J-countdown");
                v.length && v.remove()
            }
        },
        displayOperationArea: function() {
            9 === this.orderStatus && this.$deliveryOperationDom.hide()
        },
        displayDeliveryTextArea: function() {
            var i = this.$statusInfoDom
              , s = this.deliveryStatus;
            (this.logisticsCode !== S || this.isHaikui()) && s !== STATUS.INIT && s !== STATUS.PREORDER && s !== STATUS.SENDING && i.html(this.getDeliveryTextOld(s)),
            (s === STATUS.DELIVERING || s === STATUS.DONE) && (CommConstants.newCategory || this.$targetDom.find(".J-cancel-order").hide())
        },
        displayCheckMap: function() {
            var i = this.$checkMap
              , s = this.deliveryStatus;
            i.hide(),
            this.logisticsCode !== S && this.logisticsCode !== g && (s === STATUS.ACCEPTED || s === STATUS.ARRIVING || s === STATUS.DELIVERING || s === STATUS.DONE || s === STATUS.COLLECTED || s === STATUS.TRANSPORTATION || s === STATUS.ARRIVED || s === STATUS.DELIVERY) && (i.show(),
            h.loadMapData(this))
        },
        displayChangeLogisticsBtn: function() {
            var i = this.orderStatus
              , s = this.deliveryStatus
              , t = this.$changeLogisticsBtn
              , e = this.$targetDom.data("utime")
              , a = this.hasWarehouse;
            if (t.hide(),
            1 == a) {
                var r = this;
                return void t.each(function(t, a) {
                    r.isExpress() && r.hasExpressedWarehouse(a) && (4 == i && s != STATUS.INIT || 8 == i && new Date(1e3 * e + oneDay).getTime() > (new Date).getTime()) && $(a).show()
                })
            }
            this.isExpress() && this.hasExpressed() && (4 == i && s != STATUS.INIT || 8 == i && new Date(1e3 * e + oneDay).getTime() > (new Date).getTime()) && t.show()
        },
        displayChangeScRiderBtn: function() {
            if ("food" != CommConstants.shopCate) {
                var i = this.deliveryStatus
                  , s = this.orderStatus
                  , t = this.$inputRiderBtn;
                if (this.logisticsCode === S && !this.isHaikui() && !this.isExpress()) {
                    var e = this.$targetDom.data("utime");
                    (4 === s && (i === STATUS.WAITING || i === STATUS.DELIVERING || i === STATUS.DONE || i === STATUS.ARRIVING || i === STATUS.ACCEPTED) || 8 === s && new Date(1e3 * e + oneDay).getTime() > (new Date).getTime()) && (t.show(),
                    this.expressInfo && this.expressInfo.riderName && this.expressInfo.riderPhone ? t.text("修改配送信息") : t.text("录入配送信息"))
                }
            }
        },
        displayConfirmDeliveryBtn: function() {
            var i = [STATUS.WAITING_2, STATUS.ACCEPTED, STATUS.ARRIVING, STATUS.DELIVERING, STATUS.DONE].indexOf(this.deliveryStatus) > -1;
            this.logisticsCode == S && !this.isHaikui() && 1 == this.confirmDeliveryStatus && i ? this.$confirmDelivery.show() : 2 == this.confirmDeliveryStatus ? this.$confirmDelivery.addClass("disabled").show() : 0 == this.confirmDeliveryStatus && this.$confirmDelivery.remove()
        },
        initOrderStatusList: function() {
            if ((this.logisticsCode !== S || this.isHaikui()) && !this.hasGetOrderStatus) {
                var i = this;
                $.ajax({
                    url: "/v2/order/receive/r/distribute/getDispatchOrderStatusList",
                    type: "get",
                    data: {
                        wmPoiId: this.wmPoiId,
                        wmOrderViewId: this.wmOrderViewId
                    },
                    success: function(s) {
                        i.hasGetOrderStatus = !0;
                        var t = s.data ? s.data : [];
                        t.reverse(),
                        t.push({
                            status: -5,
                            ctime: i.confirmTime
                        });
                        var e = i.getOrderStatusListHtml(t);
                        i.$orderStausList.html(e)
                    },
                    error: function(i) {
                        e.showTip("获取配送列表出错，请重新尝试" | i.msg, "error")
                    }
                })
            }
        },
        isExpress: function() {
            return this.expressInfo && 1 == this.expressInfo.isExpress
        },
        hasExpressed: function() {
            return this.expressInfo.multiExpressInfo && this.expressInfo.multiExpressInfo.length > 0
        },
        hasExpressedWarehouse: function(i) {
            var s = $(i).parents(".J-delivery-section").data("multiExpressInfo");
            return console.log("仓库对应物流信息:", s),
            s && s.length > 0
        },
        isHaikui: function() {
            return this.thirdLogisticsCode && m.indexOf(this.thirdLogisticsCode) > -1
        },
        isQiKe: function() {
            return this.logisticsCode && v.indexOf(this.logisticsCode) > -1
        },
        isQiKeTip: function() {
            return this.logisticsCode && QIKETip.indexOf(this.logisticsCode) > -1
        },
        isTipAmountGray: function() {
            var i = this;
            this.isQiKeTip() ? $.ajax({
                url: t.order.isTipAmountGray,
                type: "get",
                data: {
                    wmPoiId: this.wmPoiId
                },
                success: function(s) {
                    0 === s.code && (i.isTipGray = s.data || !1),
                    i.displayAddShippingFeeBtn(),
                    i.displayFeeDetail()
                },
                error: function() {
                    console.log("请求失败"),
                    i.displayAddShippingFeeBtn(),
                    i.displayFeeDetail()
                }
            }) : (i.displayAddShippingFeeBtn(),
            i.displayFeeDetail())
        }
    },
    {
        initDeliveryDOM: function(i) {
            var s = {};
            shippingFeeArr = [],
            evaluationArr = [],
            $.ajax({
                url: t.order.getDistributionStatus,
                data: u(i),
                success: function(t) {
                    if (0 === t.code) {
                        var e = t.data;
                        console.log("配送信息接口返回:", t),
                        showDispatcherPhone = t.dispatcherPhone;
                        for (var a in e) {
                            t.expressInfo && t.expressInfo[a] && (e[a].expressInfo = t.expressInfo[a]);
                            var h = new d(a,e[a]);
                            h.init(),
                            s[a] = h
                        }
                        l(s),
                        r.getCanceledCount(),
                        r.getUnprocessedCount(),
                        o.getOtherInfo(i)
                    }
                },
                error: function() {}
            })
        }
    }
});
define("module/order/order_charge_init", ["module/cookie", "module/interface", "util/utils"], function(i, e, s) {
    function l(i) {
        var l = [];
        $(i).each(function(i, e) {
            var s = {}
              , t = $(e);
            s.wmOrderViewId = t.attr("data-view-id"),
            s.wmPoiId = t.data("poiId"),
            l.push(s)
        }),
        $.ajax({
            url: e.order.getOrderChargeInfo,
            method: "POST",
            data: {
                chargeInfo: JSON.stringify(l)
            },
            success: function(i) {
                if (0 === i.code) {
                    var e = i.data;
                    e.forEach(function(i) {
                        function e(e) {
                            var s;
                            return s = i.commisionDetails && i.commisionDetails.length > 0 ? i.commisionDetails.filter(function(i) {
                                var s = i.chargeDesc;
                                return e ? e === s.replace(/\([^\)]*\)/g, "") : e !== s.replace(/\([^\)]*\)/g, "")
                            }) : [],
                            s.length > 0 ? s[0].chargeAmount : 0
                        }
                        function l() {
                            return '<div class="posa list-payment" style="display:none"><div class="list-content">' + p.map(function(i) {
                                return "<p><span>" + i.text + "</span><span>￥" + i.num + "</span></p>"
                            }).join("") + "</div></div> : "
                        }
                        var t = $("#" + i.wmOrderViewIdStr)
                          , a = t.find(".J-charge-info")
                          , d = t.find(".J-pro-list")
                          , n = "2" == t.data("payType")
                          , c = t.data("pickType")
                          , o = a.data("agent-or-direct-poi")
                          , r = ""
                          , v = i.dataStatus && 1 == i.dataStatus
                          , p = [{
                            text: "商保理赔：",
                            num: i.insuranceActAmount
                        }, {
                            text: "顾客支付：",
                            num: i.userPayTotalAmount
                        }, {
                            text: "总计：",
                            num: (i.userPayTotalAmount + i.insuranceActAmount).toFixed(2)
                        }];
                        if (0 === i.degreeStatus) {
                            var f = "1003" == i.shippingType || "0000" == i.shippingType
                              , u = i.riderPay
                              , r = '<div class="charge-info  order-m-t J-charge-info-box">';
                            if (r += '<p class="clearfix"><span class="pull-left"><strong>小计</strong></span><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.foodAmount.toFixed(2)) + "</strong></p>",
                            u && t.find(".J-part-refund").remove(),
                            t.find(".J-degree-area").hide(),
                            i.giftDetails && i.giftDetails.length) {
                                var g = '<tr class="color-a2"><td colspan="4" class="order-p-t"><i class="fa fa-custom-gift2"></i> 赠品</td></tr>';
                                i.giftDetails.forEach(function(i) {
                                    g += "<tr><td>" + i.giftName + '<span class="color-666"> [' + i.giftActType + "]<span></td><td>&yen;" + i.giftAmount.toFixed(2) + "</td><td>x" + i.giftCount + '</td><td class="text-right">&yen;' + i.giftAmount.toFixed(2) * i.giftCount + "</td></tr>"
                                }),
                                d.append(g)
                            }
                            if (i.activityDetails && i.activityDetails.length && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">商家活动支出</span>',
                            v || (r += '<i class="fa fa-question-circle font-14 J-check-details"></i>'),
                            r += '<div class="posa list-detail" style="display:none"><div class="list-item">',
                            i.activityDetails.forEach(function(i) {
                                r += '<div class="clearfix mb5"><span class="pull-left">' + i.chargeDesc + '</span><span class="pull-right">' + (v ? "计算中" : "-&yen;" + i.chargeAmount.toFixed(2)) + "</span></div>"
                            }),
                            r += '</div><div class="clearfix list-total mt10"><strong class="pull-left">总计</strong><strong class="pull-right">' + (v ? "计算中" : "-&yen;" + i.activityAmount.toFixed(2)) + '</strong></div><div class="arrows posa"></div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + i.activityAmount.toFixed(2)) + "</div></div>"),
                            i.commisionDetails && i.commisionDetails.length) {
                                var m = "平台服务费";
                                if (1 == c && 2 == o && (m = "平台使用费"),
                                e("技术服务费_处方") > 0)
                                    var h = "复诊开方及处方流转等技术服务";
                                if (2 === i.chargeMode)
                                    e() > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">' + m + "</span> ",
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item J-charge-tip"></div><div class="list-content J-charge-content"></div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e().toFixed(2)) + "</div></div>"),
                                    e("技术服务费_处方") > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">平台服务费2</span>',
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item">' + h + '</div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e("技术服务费_处方").toFixed(2)) + "</div></div>"),
                                    r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">履约服务费</span>',
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item">每笔订单按照约定的金额收取履约服务费</div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + i.agreementAmount.toFixed(2)) + "</div></div>";
                                else if (6 === i.chargeMode || 7 === i.chargeMode || 8 === i.chargeMode) {
                                    e() > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">' + m + "</span> ",
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item J-charge-tip"></div><div class="list-content J-charge-content"></div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e().toFixed(2)) + "</div></div>"),
                                    e("技术服务费_处方") > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">平台服务费2</span> ',
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item">' + h + '</div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e("技术服务费_处方").toFixed(2)) + "</div></div>");
                                    var y = "";
                                    i.agreementCalRuleVO && (i.agreementCalRuleVO.baseFee && (y += '<div class="clearfix list"><div class="pull-left posr">基础价格</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.baseFee.toFixed(2) + "</div></div>"),
                                    i.agreementCalRuleVO.distanceFeeVO && i.agreementCalRuleVO.distanceFeeVO.totalFee > 0 && (y += '<div class="clearfix list"><div>距离收费(阶梯计费)</div><div class="pull-left posr">导航距离' + i.agreementCalRuleVO.distanceFeeVO.distance.toFixed(2) + '公里</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.distanceFeeVO.totalFee.toFixed(2) + "</div></div>",
                                    i.agreementCalRuleVO.distanceFeeVO.distanceRuleVOList.forEach(function(i) {
                                        var e = "";
                                        e = i.isMax ? i.beginDistance + "公里以上" : i.beginDistance + "-" + i.endDistance + "公里",
                                        y += '<div class="clearfix list ml10"><div class="pull-left posr color-999">' + e + "（" + i.fee.toFixed(2) + "元）</div></div>"
                                    })),
                                    i.agreementCalRuleVO.weightFeeVO && i.agreementCalRuleVO.weightFeeVO.totalFee > 0 && (y += '<div class="clearfix list"><div>重量收费(阶梯计费)</div><div class="pull-left posr">商品总重' + i.agreementCalRuleVO.weightFeeVO.weight.toFixed(0) + '千克</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.weightFeeVO.totalFee.toFixed(2) + "</div></div>",
                                    i.agreementCalRuleVO.weightFeeVO.weightRuleVOList.forEach(function(i) {
                                        y += '<div class="clearfix list ml10"><div class="pull-left posr color-999">' + i.beginWeight + "-" + i.endWeight + "千克（" + i.fee.toFixed(2) + "元）</div></div>"
                                    })),
                                    i.agreementCalRuleVO.timeFeeVO && i.agreementCalRuleVO.timeFeeVO.totalFee > 0 && (y += '<div class="clearfix list"><div class="pull-left posr">时段增值收费</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.timeFeeVO.totalFee.toFixed(2) + "</div></div>",
                                    i.agreementCalRuleVO.timeFeeVO.timeRuleVOList.forEach(function(i) {
                                        y += '<div class="clearfix list ml10"><div class="pull-left posr color-999">' + i.beginTime + "-" + i.endTime + "（加价" + i.fee.toFixed(2) + "元）</div></div>"
                                    })),
                                    i.agreementCalRuleVO.specialDateFeeVO && i.agreementCalRuleVO.specialDateFeeVO.totalFee > 0 && (y += '<div class="clearfix list"><div class="pull-left posr">节假日收费</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.specialDateFeeVO.totalFee.toFixed(2) + "</div></div>",
                                    i.agreementCalRuleVO.specialDateFeeVO.specialDateVOList.forEach(function(i) {
                                        y += '<div class="clearfix list ml10"><div class="pull-left posr color-999">' + i.specialDateName + "<span>" + s.getTime("MM", i.beginDate) + "月" + s.getTime("dd", i.beginDate) + "日-" + s.getTime("MM", i.endDate) + "月" + s.getTime("dd", i.endDate) + "日</span><span>（加价" + i.fee.toFixed(2) + "元）</span></div></div>"
                                    })),
                                    i.agreementCalRuleVO.categoryFee && (y += '<div class="clearfix list"><div class="pull-left posr">品类收费</div><div class="pull-right">&yen;' + i.agreementCalRuleVO.categoryFee.toFixed(2) + "</div></div>")),
                                    r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">履约服务费</span>',
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none; width: 360px; right: -335px"><div class="list-item">',
                                    7 !== i.chargeMode && 8 !== i.chargeMode && (r += '<span class="dpib mb10 font-bold">履约服务费=【基础价格 + 距离收费 + 重量收费 + 时段增值收费 + 节假日收费 +  品类收费 】</span>'),
                                    r += y + '</div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + i.agreementAmount.toFixed(2)) + "</div></div>"
                                } else
                                    e() > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">' + m + "</span> ",
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item J-charge-tip"></div><div class="list-content J-charge-content"></div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e().toFixed(2)) + "</div></div>"),
                                    e("技术服务费_处方") > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">平台服务费2</span> ',
                                    v || (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                                    r += '<div class="posa list-detail" style="display:none"><div class="list-item">' + h + '</div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + e("技术服务费_处方").toFixed(2)) + "</div></div>");
                                i.shippingRebateAmount > 0 && (r += '<div class="clearfix list"><div class="pull-left color-999">配送费返还</div><div class="pull-right">' + (v ? "计算中" : "&yen;" + i.shippingRebateAmount.toFixed(2)) + "</div></div>")
                            }
                            i.donateAmount > 0 && (r += '<div class="clearfix list"><div class="pull-left posr"><span class="color-999">店铺环保捐赠</span> ',
                            '<i class="fa fa-question-circle font-14 J-check-details"></i><div class="posa list-detail" style="display:none"><div class="list-item">商家参与青山捐助计划，每单将捐献一定金额助力环保</div><div class="arrows posa"></div></div></div><div class="pull-right">' + (v ? "计算中" : "-&yen;" + i.donateAmount.toFixed(2)) + "</div></div>"),
                            f ? (i.shippingAmount > 0 && (r += '<div class="clearfix list"><div class="pull-left color-999">顾客支付配送费</div><div class="pull-right">' + (v ? "计算中" : "&yen;" + i.shippingAmount.toFixed(2)) + "</div></div>"),
                            r += '</div><div class="total order-m-t">',
                            n ? (r += '<div class="clearfix"><span class="pull-left">本单预计收入</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.settleAmount.toFixed(2)) + "</span></div>",
                            i.userPayTotalAmount && (r += '<div class="clearfix font-12 color-999">本单顾客实际支付',
                            i.insuranceActAmount && (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                            r += l(),
                            r += (v ? "计算中" : "&yen;" + (i.userPayTotalAmount + i.insuranceActAmount).toFixed(2)) + '<span class="c-green">（已支付）</span><span id="medicare-' + i.wmOrderViewIdStr + '"></span></div>')) : (r += '<div class="clearfix"><span class="pull-left">本单顾客支付</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.userPayAmount.toFixed(2)) + "</span></div>",
                            i.offlineOrderSkPayAmount && (r += '<div class="clearfix"><span class="pull-left">本单平台支付</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.offlineOrderSkPayAmount.toFixed(2)) + "</span></div>")),
                            r += "</div>") : (u || n || (r += '<div class="clearfix list"><div class="pull-left color-999">顾客支付配送费</div><div class="pull-right">' + (v ? "计算中" : "&yen;" + i.shippingAmount.toFixed(2)) + "</div></div>"),
                            r += '</div><div class="total order-m-t">',
                            u ? r += '<div class="clearfix"><span class="pull-left">本单骑手应付</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.settleAmount.toFixed(2)) + "</span></div>" : n ? (r += '<div class="clearfix"><span class="pull-left">本单预计收入</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.settleAmount.toFixed(2)) + "</span></div>",
                            i.userPayTotalAmount && (r += '<div class="clearfix font-12 color-999">本单顾客实际支付',
                            i.insuranceActAmount && (r += '<i class="fa fa-question-circle font-14 J-check-details tip"></i>'),
                            r += l(),
                            r += (v ? "计算中" : "&yen;" + (i.userPayTotalAmount + i.insuranceActAmount).toFixed(2)) + '<span class="c-green">（已支付）</span><span id="medicare-' + i.wmOrderViewIdStr + '"></span></div>')) : (r += '<div class="clearfix"><span class="pull-left">本单顾客支付</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.userPayAmount.toFixed(2)) + "</span></div>",
                            i.offlineOrderSkPayAmount && (r += '<div class="clearfix"><span class="pull-left">本单平台支付</span><span class="pull-right font-20">' + (v ? "计算中" : "&yen;" + i.offlineOrderSkPayAmount.toFixed(2)) + "</span></div>")),
                            r += "</div>")
                        } else if (1 === i.degreeStatus) {
                            var x = t.data("deliveryCode")
                              , f = "1003" == x || "0" == x || "0000" == x
                              , u = i.riderPayment > 0
                              , r = '<div class="charge-info pr20 border-t"><p class="clearfix font-12 color-333"><span class="pull-left"><strong>小计</strong></span><span class="pull-right">' + (v ? "计算中" : "&yen;" + i.totalBefore.toFixed(2)) + "</span></p>";
                            u && t.find(".J-part-refund").remove(),
                            t.find(".J-degree-area").show(),
                            i.activity && i.activity.length && i.activity.forEach(function(i) {
                                r += '<div class="clearfix list font-12 color-666"><div class="pull-left">' + (i.giftName ? i.giftName : "") + "[" + i.actDesc + "]</div>",
                                i.actPrice && (r += '<div class="pull-right">' + (v ? "计算中" : "-&yen;" + i.actPrice.toFixed(2)) + "</div>"),
                                r += "</div>"
                            }),
                            i.shippingAmount > 0 && (r += '<div class="clearfix list font-12 color-666"><div class="pull-left">顾客支付配送费</div><div class="pull-right">' + (v ? "计算中" : "&yen;" + i.shippingAmount.toFixed(2)) + "</div></div>"),
                            i.shippingRebateAmount > 0 && (r += '<div class="clearfix list font-12 color-666"><div class="pull-left">配送费返还</div><div class="pull-right">' + (v ? "计算中" : "&yen;" + i.shippingRebateAmount.toFixed(2)) + "</div></div>"),
                            f ? (r += '</div><div class="total border-t pr20 color-333">',
                            r += n ? '<div class="clearfix"><div class="pull-left posr"><strong class="pull-left" style="margin-right:2px">顾客在线支付</strong><i class="fa fa-question-circle font-14 J-check-details"></i><div class="posa list-detail" style="display:none"><div class="list-item">因订单已超过45天，商家活动支出等结算数据请移步“财务管理—账单对账”页面查看”</div><div class="arrows posa"></div></div></div><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.totalAfter.toFixed(2)) + "</strong></div>" : '<div class="clearfix"><strong class="pull-left">本单顾客应付</strong><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.totalAfter.toFixed(2)) + "</strong></div>",
                            r += "</div>") : (r += '</div><div class="total border-t pr20 color-333">',
                            r += u ? '<div class="clearfix"><strong class="pull-left">本单骑手应付</strong><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.riderPayment.toFixed(2)) + "</strong></div>" : n ? '<div class="clearfix"><div class="pull-left posr"><strong class="pull-left" style="margin-right:2px">顾客在线支付</strong><i class="fa fa-question-circle font-14 J-check-details"></i><div class="posa list-detail" style="display:none"><div class="list-item">因订单已超过45天，商家活动支出等结算数据请移步“财务管理—账单对账”页面查看”</div><div class="arrows posa"></div></div></div><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.totalAfter.toFixed(2)) + "</strong></div>" : '<div class="clearfix"><strong class="pull-left">本单顾客应付</strong><strong class="pull-right">' + (v ? "计算中" : "&yen;" + i.totalAfter.toFixed(2)) + "</strong></div>",
                            r += "</div>")
                        }
                        a.html(r),
                        i.activityDetails && i.activityDetails.length || i.commisionDetails && i.commisionDetails.length || f && i.shippingAmount || i.donateAmount > 0 || a.find(".J-charge-info-box").hide()
                    }),
                    c = "success",
                    d()
                } else
                    c = "fail"
            },
            error: function() {
                c = "fail"
            }
        })
    }
    function t(i, s) {
        $(i).each(function(i, l) {
            var t = {}
              , o = $(l);
            t.orderViewId = o.attr("data-view-id");
            var r = s.filter(function(i) {
                return i.wm_order_id_view_str === t.orderViewId + ""
            })[0];
            t.medicareTag = r && r.medicareTag ? 1 : 0,
            t.medicareTag && (t.wmPoiId = r.wm_poi_id,
            t.userId = r.user_id,
            $.ajax({
                url: e.order.getOrderMedicareInfo,
                method: "GET",
                data: t,
                success: function(i) {
                    if (0 === i.code) {
                        var e = i.data;
                        e.orderViewId && (n[e.orderViewId] = a(e)),
                        "pending" != c && d()
                    }
                },
                error: function(i) {}
            }))
        })
    }
    function a(i) {
        return i ? "（<span>其中医保支付&yen;" + i.medicareProductAmount + "，</span><span> 统筹支付&yen;" + i.medicarePoolAmount + "，</span><span> 个帐支付&yen;" + i.medicarePersonalAmount + "</span>）" : ""
    }
    function d() {
        for (var i = Object.keys(n), e = 0; e < i.length; e++) {
            var s = $("#medicare-" + i[e]);
            s && s.html(n[i[e]]),
            delete n[i[e]]
        }
    }
    var n = {}
      , c = "pending";
    return {
        init: function(i, e) {
            l(i),
            t(i, e)
        }
    }
});
jQuery.extend({
    createUploadIframe: function(e, t) {
        var r = "jUploadFrame" + e
          , o = '<iframe id="' + r + '" name="' + r + '" style="position:absolute; top:-9999px; left:-9999px"';
        return window.ActiveXObject && ("boolean" == typeof t ? o += ' src="javascript:false"' : "string" == typeof t && (o += ' src="' + t + '"')),
        o += " />",
        jQuery(o).appendTo(document.body),
        jQuery("#" + r).get(0)
    },
    createUploadForm: function(e, t, r) {
        var o = "jUploadForm" + e
          , n = "jUploadFile" + e
          , a = jQuery('<form  action="" method="POST" name="' + o + '" id="' + o + '" enctype="multipart/form-data"></form>');
        if (r)
            for (var u in r)
                jQuery('<input type="hidden" name="' + u + '" value="' + r[u] + '" />').appendTo(a);
        var c = jQuery("#" + t)
          , d = jQuery(c).clone();
        return jQuery(c).attr("id", n),
        jQuery(c).before(d),
        jQuery(c).appendTo(a),
        jQuery(a).css("position", "absolute"),
        jQuery(a).css("top", "-1200px"),
        jQuery(a).css("left", "-1200px"),
        jQuery(a).appendTo("body"),
        a
    },
    ajaxFileUpload: function(e) {
        e = jQuery.extend({}, jQuery.ajaxSettings, e);
        var t = (new Date).getTime()
          , r = jQuery.createUploadForm(t, e.fileElementId, "undefined" == typeof e.data ? !1 : e.data)
          , o = (jQuery.createUploadIframe(t, e.secureuri),
        "jUploadFrame" + t)
          , n = "jUploadForm" + t;
        e.global && !jQuery.active++ && jQuery.event.trigger("ajaxStart");
        var a = !1
          , u = {};
        e.global && jQuery.event.trigger("ajaxSend", [u, e]);
        var c = function(t) {
            var n = document.getElementById(o);
            try {
                n.contentWindow ? (u.responseText = n.contentWindow.document.body ? n.contentWindow.document.body.innerHTML : null,
                u.responseXML = n.contentWindow.document.XMLDocument ? n.contentWindow.document.XMLDocument : n.contentWindow.document) : n.contentDocument && (u.responseText = n.contentDocument.document.body ? n.contentDocument.document.body.innerHTML : null,
                u.responseXML = n.contentDocument.document.XMLDocument ? n.contentDocument.document.XMLDocument : n.contentDocument.document)
            } catch (c) {
                jQuery.handleError(e, u, null, c)
            }
            if (u || "timeout" == t) {
                a = !0;
                var d;
                try {
                    if (d = "timeout" != t ? "success" : "error",
                    "error" != d) {
                        var l = jQuery.uploadHttpData(u, e.dataType);
                        e.success && e.success(l, d),
                        e.global && jQuery.event.trigger("ajaxSuccess", [u, e])
                    } else
                        jQuery.handleError(e, u, d)
                } catch (c) {
                    d = "error",
                    jQuery.handleError(e, u, d, c)
                }
                e.global && jQuery.event.trigger("ajaxComplete", [u, e]),
                e.global && !--jQuery.active && jQuery.event.trigger("ajaxStop"),
                e.complete && e.complete(u, d),
                jQuery(n).unbind(),
                setTimeout(function() {
                    try {
                        jQuery(n).remove(),
                        jQuery(r).remove()
                    } catch (t) {
                        jQuery.handleError(e, u, null, t)
                    }
                }, 100),
                u = null
            }
        };
        e.timeout > 0 && setTimeout(function() {
            a || c("timeout")
        }, e.timeout);
        try {
            var r = jQuery("#" + n);
            jQuery(r).attr("action", e.url),
            jQuery(r).attr("method", "POST"),
            jQuery(r).attr("target", o),
            r.encoding ? jQuery(r).attr("encoding", "multipart/form-data") : jQuery(r).attr("enctype", "multipart/form-data"),
            jQuery(r).submit()
        } catch (d) {
            jQuery.handleError(e, u, null, d)
        }
        return jQuery("#" + o).load(c),
        {
            abort: function() {}
        }
    },
    uploadHttpData: function(r, type) {
        var data = !type;
        return data = "xml" == type || data ? r.responseXML : r.responseText,
        "script" == type && jQuery.globalEval(data),
        "json" == type && eval("data = " + data),
        "html" == type && jQuery("<div>").html(data).evalScripts(),
        data
    }
});
define("widgets/ajaxfileupload", function() {});

define("module/order/order_delivery_operate", ["module/cookie", "widgets/status_button", "module/interface", "util/utils", "widgets/vote_star", "util/format_check", "widgets/normal_dialog", "module/page_jump", "module/order/order_slidebar", "module/order/order_utils", "module/order/order_delivery_init", "module/order/order_charge_init", "module/order/printorder", "module/bridge/bridge_app", "widgets/ajaxfileupload"], function(e, t, i, a, o, n, s, r, d, c, l, p, u, m, v) {
    var f = new Vue({
        el: "#b2c-order-logistics-modal",
        data: {
            logisticsModalVisible: !1,
            rules: {
                logisticsPlatCode: [{
                    required: !0,
                    message: "请选择物流平台"
                }],
                logisticsNo: [{
                    required: !0,
                    message: "请输入快递单号",
                    trigger: "blur,change"
                }]
            },
            logisticsPackageFormData: {
                packages: []
            },
            logisticsPlatformList: [],
            jQorder: null,
            wmViewId: null,
            wmPoiId: null,
            callback: null,
            jQbtn: null,
            warehouseId: null
        },
        created: function() {},
        methods: {
            open: function() {
                this.logisticsModalVisible = !0
            },
            onClose: function() {
                this.jQbtn && this.jQbtn.enable(),
                this.resetData()
            },
            addItem: function() {
                return this.logisticsPackageFormData.packages && this.logisticsPackageFormData.packages.length > 4 ? void a.showTip("一个订单最多可支持5个物流单发货") : void this.logisticsPackageFormData.packages.push({
                    logisticsPlatCode: null,
                    logisticsNo: "",
                    warehouseId: this.warehouseId
                })
            },
            removeItem: function(e) {
                this.logisticsPackageFormData.packages.splice(e, 1)
            },
            submitForm: function() {
                var e = this;
                e.$refs.logisticsPackageForm.validate(function(t) {
                    return t ? (e.logisticsModalVisible = !1,
                    void e.$http.post(i.order.sc.reportLogisticsInfo, {
                        wmPoiId: e.wmPoiId,
                        wmOrderViewId: e.wmViewId,
                        logisticsInfoParams: JSON.stringify(e.logisticsPackageFormData.packages || [])
                    }).then(function(t) {
                        var i = t.body;
                        0 === i.code ? e.callback ? e.callback(function() {
                            l.initDeliveryDOM(e.jQorder)
                        }) : (l.initDeliveryDOM(e.jQorder),
                        e.$toast.success("保存成功")) : 2 === i.code ? s({
                            title: "提示建议",
                            content: i.msg,
                            btns: [{
                                txt: "关闭",
                                fn: function() {
                                    window.top.location.reload()
                                }
                            }]
                        }) : e.$toast.warn(i.msg)
                    }, function() {
                        e.$toast.warn("网络异常，请稍后重试")
                    })) : !1
                })
            },
            initPackagesInfo: function(e) {
                e && e.length ? this.logisticsPackageFormData.packages = e : this.logisticsPackageFormData.packages.push({
                    logisticsPlatCode: null,
                    logisticsNo: "",
                    warehouseId: this.warehouseId
                })
            },
            resetData: function() {
                this.logisticsPackageFormData.packages = [],
                this.wmViewId = null,
                this.wmPoiId = null,
                this.jQbtn = null
            }
        }
    })
      , h = "1003"
      , g = "00005001"
      , w = {
        INIT: -1,
        SENDING: -10,
        PREORDER: -20,
        WAITING: 0,
        WAITING_NEW: 1,
        WAITING_2: 5,
        ACCEPTED: 10,
        ARRIVING: 15,
        DELIVERING: 20,
        DONE: 40,
        CANCELLED: 100
    }
      , y = {
        activityData: {},
        orderData: {},
        jQbtn: null,
        logisticsPlats: {},
        sendDeliverySelf: function(e) {
            var o = this
              , n = $(e.target).parents(".order")
              , s = (n.data("orderId"),
            n.attr("data-view-id"))
              , r = n.data("poiId")
              , l = $(e.target).parents(".J-delivery-section")
              , p = new t(e.target);
            p.disable();
            var u = function(e) {
                $.post(i.order.hasSent, {
                    wmOrderViewId: s,
                    wmPoiId: r
                }, function(t) {
                    if (t.code)
                        a.showTip("操作失败，请重试！", "warn", 2e3),
                        p.enable();
                    else {
                        if (e)
                            l.data("tempDeliveryStatus", 20),
                            e();
                        else {
                            n.data("status", 6);
                            var i = CommConstants.shopCategoryObj.MerchandiseDeliveryG;
                            n.find(".J-delivery-operation .btn:not(.J-confirm-delivery)").hide(),
                            n.find(".J-confirm-delivery").show(),
                            n.find(".J-sc-input-rider").show(),
                            n.find(".J-delivery-display").html('<span class="b-title">' + i + "</span>"),
                            n.find(".order-state").text(i)
                        }
                        setTimeout(function() {
                            d.getCanceledCount(),
                            d.getUnprocessedCount()
                        }, 500)
                    }
                })
            };
            if (!c.isPre(n, p)) {
                var m = l.data("isExpress");
                1 == m ? o.addb2cLogisticsInfo(e, u, p) : u()
            }
        },
        sendDevSelf: function(e) {
            var t = $(e.target).parents(".order")
              , i = t.attr("data-view-id")
              , o = t.data("poiId")
              , n = s({
                title: "转自配提醒",
                content: "将为您取消美团配送并重新打印小票，订单需由商家自行完成配送，确定转为自配送？",
                btns: [{
                    txt: "自配",
                    fn: function() {
                        $.post("/v2/order/receive/processed/w/distribute/changeToPoiSelfShipping", {
                            wmOrderViewId: i,
                            wmPoiId: o
                        }, function(e) {
                            e.code ? a.showTip("转自配失败，请重试！", "warn") : (t.data("delivery-code", "0000"),
                            t.find(".order-state").text(""),
                            l.initDeliveryDOM(t),
                            u.printWhenConfirm(void 0, t)),
                            n.modal("hide")
                        })
                    }
                }, {
                    txt: "取消",
                    fn: function() {
                        n.modal("hide")
                    }
                }]
            })
              , r = a.url2Cid();
            r && a.reportMC("b_shangou_online_e_uyjlka8q_mc", r)
        },
        sendDelivery: function(e, i) {
            var o = this
              , n = $(e.target)
              , s = n.parents(".order")
              , r = n.parents(".J-delivery-section")
              , d = r.data("teamId")
              , l = r.data("is-pt-gray")
              , p = r.data("is-ks")
              , u = r.data("teamCode")
              , m = r.data("hasJuheAndZB")
              , v = new t(n);
            "juhe" === i ? (u = "00005001",
            d = "501") : m && (u = "1003",
            d = "4"),
            v.disable(),
            c.isPre(s, v) || (1 == l && "2002" != u && "00005001" != u && "1" != p ? o._getActivityInfo(v, null) : o._distributeOrder(d || -2, u, v));
            var f = a.url2Cid();
            f && a.reportMC("b_shangou_online_e_7bencmoh_mc", f),
            n.find("img").length && a.reportMC("b_shangou_online_e_qpjx3r2q_mc", f)
        },
        sendJuHeDelivery: function(e) {
            var t = $(e.target);
            if (!t.hasClass("disabled")) {
                this.sendDelivery(e, "juhe");
                var i = a.url2Cid();
                i && a.reportMC("b_shangou_online_e_aqi262to_mc", i)
            }
        },
        _distributeOrder: function(e, t, o) {
            function n(e) {
                a.showTip(e.msg, "success", 2e3),
                o.enable()
            }
            var r = this
              , d = o.parents(".order")
              , c = d.find(".J-delivery-section")
              , p = c.data("hhKS")
              , u = c.data("tipAmount");
            $.post(i.order.sendDistribution, {
                wmOrderViewId: d.attr("data-view-id"),
                wmPoiId: d.data("poiId"),
                deliveryTeamId: e,
                tipAmount: u,
                shippingFee: t == h ? c.data("shipping-fee") : 0
            }, function(e) {
                if (e.code) {
                    if (2 == e.code)
                        var i = s({
                            title: "运单价格变化提醒",
                            content: "运单价格变化请刷新重试",
                            btns: [{
                                txt: "确定",
                                fn: function() {
                                    l.initDeliveryDOM(d),
                                    i.modal("hide")
                                }
                            }, {
                                txt: "取消",
                                fn: function() {}
                            }]
                        });
                    else
                        10031 === e.code ? r._showAcceptProtocolModal("美团跑腿") : 10032 === e.code ? r._showAcceptProtocolModal("混合") : -10 === e.code ? (o.addClass("disabled").attr("data-original-title", e.msg).tooltip(),
                        a.showTip(e.msg, "warn", 2e3)) : a.showTip(e.msg, "warn", 2e3);
                    o.enable()
                } else
                    n(e),
                    ("true" === p || "30012002" === t) && setTimeout(function() {
                        l.initDeliveryDOM(d)
                    }, 500)
            }).error(function() {
                a.showTip("操作失败，请重试", "warn", 2e3),
                o.enable()
            })
        },
        _getActivityInfo: function(t, i) {
            var o = this
              , n = t.parents(".order")
              , r = n.find(".J-ship-tip")
              , d = n.attr("data-view-id")
              , c = n.data("poiId")
              , l = 0
              , p = 0
              , u = 0
              , m = 0
              , v = "";
            o.orderData.wmPoiId = c,
            i ? (l = i.tipAmount,
            p = 1 === i.couponSource ? 0 : i.couponId,
            u = i.activityId,
            m = i.couponSource,
            v = i.couponViewId) : (l = r.text() || 0,
            p = 0,
            u = 0,
            m = 0,
            v = ""),
            o.jQbtn = t,
            $.ajax({
                url: "/v2/order/receive/query/r/pt/activity/info",
                type: "GET",
                data: {
                    acctId: e.getCookie("acctId"),
                    wmOrderViewId: d,
                    wmPoiId: c,
                    tipAmount: l,
                    couponId: p,
                    activityId: u,
                    couponSource: m,
                    couponViewId: v
                },
                success: function(e) {
                    if (t.enable(),
                    e.code)
                        if (49 === e.code)
                            var i = new s({
                                title: "配送失败",
                                content: "因超重/金额过大，跑腿暂无法配送，请您自行完成配送",
                                btns: [{
                                    txt: "确定",
                                    fn: function() {
                                        i.modal("hide"),
                                        location.reload()
                                    }
                                }]
                            });
                        else
                            a.showTip(e.msg, "error");
                    else {
                        var n = e.data;
                        o.activityData.couponId = n.couponId,
                        o.activityData.couponAmount = n.couponAmount,
                        o.activityData.activityId = n.activityId,
                        o.activityData.activityAmount = n.activityAmount,
                        o.activityData.extraFee = n.extraFee,
                        o.activityData.payAmount = n.payAmount,
                        o.activityData.tipAmount = n.tipAmount,
                        o.activityData.shippingFee = n.shippingFee,
                        o.activityData.shippingFeeBase = n.shippingFeeBase,
                        o.activityData.distance = n.distance,
                        o.activityData.bmCityId = n.bmCityId,
                        o.activityData.couponViewId = String(n.couponViewId),
                        o.activityData.couponSource = n.couponSource,
                        n.wmPoiId = c,
                        o._getActivityDom(t, n)
                    }
                }
            })
        },
        _getActivityDom: function(e, t) {
            function o() {
                var t = '<ul style="font-size: 0">';
                c.forEach(function(e) {
                    t += '<li style="cursor: pointer;" data-link="' + e.click_url + '" data-resource-id="' + e.resource_id + '"><img src="' + e.pic_url + '" style="width: 100%;height: 78px;" alt=""></li>'
                }),
                t += "</ul>";
                var i = $("#J-distribute-pt");
                if (i.size())
                    i.find(".modal-body").empty().append(d);
                else
                    var o = s({
                        bannerList: t,
                        bannerSize: c.length,
                        utils: a,
                        title: "发起配送",
                        content: d,
                        "class": e.hasOwnRights ? "own-rights-modal" : "",
                        id: "J-distribute-pt",
                        btns: [{
                            txt: "发起配送",
                            fn: function() {
                                n._distributeOrderForPtGray(e, JSON.stringify(n.activityData)),
                                o.modal("hide")
                            }
                        }, {
                            txt: "取消",
                            fn: function() {}
                        }],
                        onClose: function() {
                            e.enable(),
                            r && $(document).undelegate(".J-own-rights-comment-tip", "mouseenter")
                        }
                    })
            }
            var n = this
              , r = !1
              , d = '<p class="clearfix"><strong class="pull-left">基础运费</strong><span class="pull-right color-666">&yen;' + t.shippingFeeBase + "</span></p>";
            t.extraFee > 0 && (d += '<p class="clearfix"><strong class="pull-left">临时加价 <i class="fa fa-question-circle font-12" data-toggle="tooltip" data-placement="right" title="" data-original-title="' + t.extraFeeReason + '"></i></strong><span class="pull-right color-666">&yen;' + t.extraFee + "</span></p>"),
            d += '<p class="clearfix"><span class="pull-left">优惠券</span>',
            d += '<a href="javascript:void(0);" class="pull-right J-select-coupon J-select-btn">',
            d += t.couponId > 0 || t.couponViewId ? '<span class="c-red">- &yen;' + t.couponAmount + " ></span>" : t.couponCount > 0 ? t.couponCount + "张可用优惠券 >" : '<span class="color-666">暂无可用优惠券 ></span>',
            d += "</a></p>",
            t.activityId > 0 && (d += '<p class="clearfix"><span class="pull-left">' + t.activityName + '</span><a href="javascript:void(0);" class="pull-right J-select-activity J-select-btn"><span class="c-red">- &yen;' + t.activityAmount + " ></span></a></p>"),
            d += "<hr>",
            d += '<div class="clearfix mt20"><div class="pull-left font-12">小费额度（最高20元）<div class="color-main">小费将在订单完成后结算给骑手</div></div><input type="text" class="pull-right form-control J-tip-amount-dialog" style="width: 100px;" value="' + t.tipAmount + '"></div>',
            d += '<div class="mt20 text-right"><p class="alert">当前实付' + t.payAmount + "（总计" + t.totalAmount + "，已优惠" + t.totalCouponAmount + "）</p></div>",
            e.hasOwnRights() && (d += '<div class="clearfix mt20 own-rights-container" style="background:' + t.tipsBgColor + ";color:" + t.tipsColor + '"><img class="pull-lef" style="width:12px;height:14px;" src="' + t.tipsIcon + '"><span class="content">' + t.tipsContent + '</span><span class="J-own-rights-comment-tip comment-tip glyphicon glyphicon-question-sign"><span class="comment-alert">' + t.tipsComment + "</span></span></div>",
            r = !0);
            var c = [];
            if ($.ajax({
                url: i.order.getSendBtnBannerList,
                type: "GET",
                data: {
                    wmPoiId: t.wmPoiId
                },
                success: function(e) {
                    c = e.data || [],
                    o()
                },
                error: function() {
                    c = [],
                    o()
                }
            }),
            r) {
                var l = a.url2Cid();
                $(document).delegate(".J-own-rights-comment-tip", "mouseenter", function() {
                    a.reportMC(a.ownRightReportBid.orderDetailClick, l)
                }),
                a.reportMV(a.ownRightReportBid.orderDetail, l)
            }
            $('[data-toggle="tooltip"]').tooltip()
        },
        _distributeOrderForPtGray: function(e, t) {
            var o = e.parents(".order")
              , n = (o.find(".J-delivery-section"),
            JSON.parse(t).tipAmount)
              , r = JSON.parse(t).shippingFee;
            $.post(i.order.sendDistributionForPtGray, {
                wmOrderViewId: o.attr("data-view-id"),
                wmPoiId: o.data("poiId"),
                tipAmount: n,
                shippingFee: r,
                couponParam: t
            }, function(t) {
                if (t.code)
                    if (49 === t.code)
                        var i = new s({
                            title: "配送失败",
                            content: "因超重/金额过大，跑腿暂无法配送，请您自行完成配送",
                            btns: [{
                                txt: "确定",
                                fn: function() {
                                    i.modal("hide"),
                                    location.reload()
                                }
                            }]
                        });
                    else
                        a.showTip(t.msg, "warn", 2e3);
                else
                    a.showTip(t.msg, "success", 2e3),
                    e.enable(),
                    l.initDeliveryDOM(o)
            }).error(function() {
                a.showTip("操作失败，请重试", "warn", 2e3),
                e.enable()
            })
        },
        _showAcceptProtocolModal: function(e) {
            new s({
                title: "发配送失败",
                content: "由于您未在7天内确认" + e + "配送补充协议，已无法再使用" + e + "配送服务，请尽快前往处理",
                btns: [{
                    txt: "去看看",
                    fn: function() {
                        parent.location.href = "/promise"
                    }
                }, {
                    txt: "知道了"
                }]
            })
        },
        cancelDelivery: function(e) {
            function o(e, t, o, r) {
                $.post(i.order.cancelDelivery, {
                    wmOrderViewId: d,
                    wmPoiId: c,
                    deliveryStatus: r,
                    code: e,
                    content: t,
                    otherReason: o
                }, function(l) {
                    if (l.code)
                        switch (l.code) {
                        case 1:
                            a.showTip(l.msg, "warn");
                            break;
                        case 2:
                            a.showTip(l.msg, "warn");
                            break;
                        case 3:
                            var p = s({
                                title: "取消配送扣款",
                                content: l.msg,
                                btns: [{
                                    txt: "确认",
                                    fn: function() {
                                        $.ajax({
                                            url: i.order.confirmCancelDelivery,
                                            type: "POST",
                                            data: {
                                                wmOrderViewId: d,
                                                wmPoiId: c,
                                                deliveryStatus: r,
                                                code: e,
                                                content: t,
                                                otherReason: o
                                            },
                                            success: function(e) {
                                                e.code ? a.showTip(e.msg, "error") : (a.showTip(e.msg, "success"),
                                                p.modal("hide"))
                                            }
                                        })
                                    }
                                }, {
                                    txt: "取消"
                                }]
                            });
                            break;
                        default:
                            a.showTip(l.msg, "warn")
                        }
                    else
                        a.showTip(l.msg, "success");
                    n.enable()
                }).error(function() {
                    a.showTip("操作失败，请重试", "error"),
                    n.enable()
                })
            }
            var n = new t($(e.target))
              , r = n.parents(".order")
              , d = r.attr("data-view-id")
              , c = r.data("poiId")
              , l = r.data("pre")
              , p = r.find(".J-delivery-section")
              , u = p.data("teamCode")
              , m = p.data("deliveryStatus")
              , v = p.data("dispatcherName");
            n.disable();
            var f = "";
            switch (parseInt(m)) {
            case w.WAITING:
            case w.WAITING_NEW:
            case w.WAITING_2:
                f = 0 == l ? "骑手即将接单，您可耐心等待。若确定需要取消配送，请选择原因：" : "预订单送达前一小时系统自动分配骑手，请勿提前取消配送：";
                break;
            case w.ACCEPTED:
                f = "骑手正在飞速赶来途中，请务必先与骑手(" + v + ")电话沟通后再取消，以免造成误解或投诉！";
                break;
            case w.DELIVERING:
                f = "骑手已在配送中，请务必先与骑手(" + v + ")电话沟通后再取消，以免造成误解或投诉！"
            }
            $.ajax({
                url: i.order.getDeliveryCancelReasons,
                data: {
                    wmOrderViewId: d,
                    wmPoiId: c
                },
                success: function(e) {
                    if (0 == e.code) {
                        m = e.data.deliveryStatus;
                        var t = e.data.reasonList
                          , i = [];
                        i.push('<p class="tip alert">' + (u == h ? e.data.title : f) + "</p>");
                        for (var r in t)
                            i.push('<label class="label-radio"><input type="radio" name="reason" value="' + t[r].code + '">'),
                            i.push('<span class="custom-radio"></span><span class="J-content">' + t[r].content + "</span></label>");
                        u == h && i.push('<div style="margin-top: 10px;"><textarea class="form-control noresize J-add-reason" placeholder="补充原因"></textarea></div>');
                        var d = s({
                            title: "取消配送",
                            content: i.join(""),
                            btns: [{
                                txt: "取消配送",
                                fn: function() {
                                    var e = d.find('input[name="reason"]:checked')
                                      , t = e.val()
                                      , i = e.parents(".label-radio").find(".J-content").text();
                                    if (t) {
                                        var n = d.find(".J-add-reason");
                                        o(t, i, u == h ? n.val() : "", m),
                                        d.modal("hide")
                                    } else
                                        a.showTip("请选择原因", "warn", 2e3)
                                }
                            }, {
                                txt: "不取消配送",
                                fn: function() {
                                    n.enable()
                                }
                            }]
                        })
                    } else
                        a.showTip(e.msg, "warn", 2e3),
                        n.enable()
                },
                error: function() {
                    a.showTip("操作失败，请重试", "warn", 2e3),
                    n.enable()
                }
            });
            var g = a.url2Cid();
            g && a.reportMC("b_shangou_online_e_krznmo81_mc", g)
        },
        getDeliveryPhone: function(e) {
            var t = $(e.target)
              , i = t.parents(".order")
              , o = i.find(".J-delivery-section")
              , n = i.find(".J-dis-phone-area")
              , r = i.attr("data-view-id")
              , d = i.data("poiId");
            $.ajax({
                url: "/v2/order/receive/processed/r/dispatcherPhone",
                data: {
                    wmOrderViewId: r,
                    wmPoiId: d
                },
                success: function(e) {
                    if (0 == e.code) {
                        var t = e.data
                          , i = t.dispatcherPhone
                          , r = t.orgLeaderPhone
                          , d = t.orgEmergencyPhone
                          , c = t.showTips
                          , l = t.detailTips
                          , p = "";
                        if (c)
                            var u = s({
                                title: "温馨提示",
                                content: l,
                                btns: [{
                                    txt: "我知道了",
                                    fn: function() {
                                        u.modal("hide")
                                    }
                                }]
                            });
                        else if (i || r || d) {
                            if (p += '<div class="posa other-phone drop-con">',
                            i) {
                                o.data("dispatcherPhone", i);
                                var m = o.data("teamCode") === g ? "站点" : "骑手";
                                p += "<div>" + m + "电话：" + i + "</div>"
                            }
                            r && (p += "<div>站点电话：" + r + "</div>"),
                            d && (p += "<div>站点备用：" + d + "</div>"),
                            p += "</div>",
                            n.html(p)
                        } else
                            a.showTip("获取骑手电话失败，请稍后重试")
                    } else
                        a.showTip("获取骑手电话失败，请稍后重试")
                },
                error: function() {
                    a.showTip("获取骑手电话失败，请稍后重试")
                }
            });
            var c = a.url2Cid();
            c && a.reportMC("b_shangou_online_e_wef3mvlo_mc", c, null, null, {
                order_id: r
            })
        },
        voteDispatcher: function(e) {
            function t(e, t) {
                if (e && t)
                    for (var i = 0, a = t.length; a > i; i++)
                        if (e === t[i])
                            return !0;
                return !1
            }
            var n = this
              , r = $(e.target)
              , d = r.parents(".order")
              , c = d.attr("data-view-id")
              , l = d.data("poiId")
              , p = '<div class="modal-evaluate-delivery"><p class="give-mark"><span>本次配送评分：</span><span class="vote-star J-vote-star"><span class="stars"><i></i><i></i><i></i><i></i><i></i></span><span class="bar"></span></span></p><ul class="choose-item J-choose-item"></ul><textarea class="J-personal form-control" maxlength="300"></textarea></div>'
              , u = s({
                title: "评价骑手",
                content: p,
                btns: [{
                    txt: "匿名评价",
                    fn: function() {
                        n._sendEval(c, l, r, u)
                    }
                }],
                id: "J-modal-evaluate-delivery"
            })
              , m = $("#J-modal-evaluate-delivery")
              , v = m.find(".J-vote-star")
              , f = m.find(".J-choose-item")
              , h = m.find(".J-personal");
            n.voteStar = new o({
                jQdom: v,
                markingCb: function() {
                    this.getMark() > 2 ? f.hide() : f.show()
                }
            }),
            $.ajax({
                url: i.order.getDistributionEvaluation,
                data: {
                    orderInfos: JSON.stringify([{
                        wmOrderViewId: c,
                        wmPoiId: l
                    }])
                },
                success: function(e) {
                    if (0 == e.code) {
                        var i = []
                          , a = e.evaluationList[0];
                        for (var o in e.structureds)
                            i.push('<li><label class="label-checkbox inline"><input type="checkbox" value="' + o + '"' + (a && t(e.structureds[o], a.structureds) ? " checked" : "") + ' /><span class="custom-checkbox"></span>' + e.structureds[o] + "</label></li>");
                        f.html(i.join("")),
                        a && a.grade ? n.voteStar.setMark(a.grade) : n.voteStar.setMark(0),
                        a && a.personal ? h.val(a.personal) : h.val(""),
                        n.voteStar.getMark() >= 3 || !a ? f.hide() : f.show(),
                        a ? (n.voteStar.disable(),
                        h.attr("disabled", "disabled"),
                        f.find("input").attr("disabled", "disabled"),
                        m.find(".J-confirm").hide()) : (n.voteStar.enable(),
                        h.removeAttr("disabled"),
                        f.find("input").removeAttr("disabled"))
                    }
                }
            });
            var g = a.url2Cid();
            g && a.reportMC("b_shangou_online_e_b9evhaqg_mc", g)
        },
        complainRider: function(e) {
            var t = $(e.target)
              , i = t.parents(".order")
              , o = i.attr("data-view-id")
              , n = i.data("poiId")
              , r = i.find(".J-delivery-section")
              , d = r.data("dispatcherName")
              , c = r.data("dispatcherPhone")
              , l = 0
              , p = ""
              , u = '<div><div class="font-16">投诉原因<span class="color-666">（必填）</span></div><div class="complain-reason"><label class="label-radio"><input type="radio" name="c-reason" checked="true" value="0"><span class="custom-radio"></span> <span>骑手尚未到店</span></label><div class="font-12 color-999 reason-detail">骑手实际未到店，虚假点击“已到店”</div></div><div class="complain-reason"><label class="label-radio"><input type="radio" name="c-reason" value="1"><span class="custom-radio"></span> <span>骑手到店后离开</span></label><div class="font-12 color-999 reason-detail">骑手到店，未取餐离开</div></div><div class="font-16 upload-img">上传图片<span class="color-666">（必填）</span></div><div class="font-12 color-999 mt5">1.请上传带有小票的完整照片 2.保证小票清晰可辨</div><div class="clearfix"><div class="pull-left J-img-box"></div><div class="pull-left J-add-img-box"><div class="add-img-box posr text-center cursor color-999"><i class="fa fa-custom-info-error font-26"></i><span class="font-12">上传照片</span><input type="file" name="file" accept="image/gif, image/jpeg, image/png" class="posa cursor" id="J-upload-img"></div></div></div></div>'
              , m = s({
                title: "投诉骑手",
                content: u,
                btns: [{
                    txt: "提交",
                    fn: function() {
                        return l = $('[name="c-reason"]:checked').val(),
                        jQimg = $(".J-img-box img"),
                        jQimg.each(function(e, t) {
                            var i = t.src;
                            0 === e ? p = i : p += "," + i
                        }),
                        "" === p ? void a.showTip("请先上传带有小票的完整照片") : void $.ajax({
                            type: "POST",
                            url: "/v2/order/receive/processed/w/distribute/reportDeliveryException",
                            data: {
                                wmOrderViewId: o,
                                wmPoiId: n,
                                dispatcherName: d,
                                dispatcherMobile: c,
                                type: l,
                                pics: p
                            },
                            success: function(e) {
                                0 == e.code ? m.modal("hide") : a.showTip(e.msg)
                            },
                            error: function() {
                                a.showTip("网络错误,请稍后重试")
                            }
                        })
                    }
                }, {
                    txt: "取消",
                    fn: function() {
                        m.modal("hide")
                    }
                }],
                size: "md"
            })
        },
        uploadImg: function() {
            if (this.files.length > 0) {
                var e = this.files[0];
                if (e.size > 5242880)
                    return void a.showTip("每张图片大小不能超过5M");
                var t = new FileReader;
                t.readAsDataURL(e),
                t.onload = function(t) {
                    var i = new Image;
                    i.onload = function() {
                        $.ajaxFileUpload({
                            url: "/v2/shop/decoration/w/uploadImage",
                            secureuri: !1,
                            fileElementId: "J-upload-img",
                            dataType: "text/html",
                            file: e,
                            success: function(e) {
                                var e = e.replace(/<.*?>/gi, "")
                                  , t = $("#J-upload-img")
                                  , i = $(".J-img-box")
                                  , o = $(".J-add-img-box")
                                  , e = $.parseJSON(e);
                                if (1 === e.code)
                                    return a.showTip(e.msg, "error"),
                                    !1;
                                var n = '<div class="complain-img-box posr pull-left"><img src="' + e.data + '" alt=""><i class="fa fa-custom-info-error posa font-18 cursor J-delete-img"></i></div>';
                                i.append(n),
                                i.children().length >= 2 && o.hide(),
                                t.val("")
                            }
                        })
                    }
                    ,
                    i.src = t.target.result
                }
            }
        },
        _sendEval: function(e, t, o, n) {
            var s = this
              , r = $("#J-modal-evaluate-delivery")
              , d = r.find(".J-choose-item")
              , c = s.voteStar.getMark()
              , l = [];
            d.find('input[type="checkbox"]:checked').each(function() {
                l.push($(this).val())
            });
            var p = r.find(".J-personal").val();
            return 0 == c ? void a.showTip("请打分", "warn", 3e3) : 3 > c && 0 == l.length ? void a.showTip("请至少选择一项原因", "warn", 3e3) : void $.ajax({
                type: "POST",
                url: i.order.submitDistributionEvaluation,
                data: {
                    wmOrderViewId: e,
                    wmPoiId: t,
                    grade: c,
                    structuredCodes: 3 > c ? l.join(",") : "",
                    personal: p
                },
                success: function(e) {
                    0 == e.code ? (a.showTip("评价成功"),
                    o.text("查看评价"),
                    n.modal("hide"),
                    o.data("status", 2)) : a.showTip(e.msg)
                },
                error: function() {
                    a.showTip("网络错误,请稍后重试")
                }
            })
        },
        addSelfDeliveryRiderInfo: function(e) {
            var t = $(e.target).parents(".order")
              , o = t.attr("data-view-id")
              , r = t.data("poi-id")
              , d = $(e.target).parents(".J-delivery-section")
              , c = d.data("riderName") || ""
              , p = d.data("riderPhone") || ""
              , u = d.data("logisticsPlatCode");
            this._getLogisticsplats(1, function(e) {
                var d = '<select name="" class="form-control J-logistics-plat" style="width:150px;display: inline-block;">' + e.map(function(e) {
                    return '<option value="' + e.code + '" ' + (e.code == u ? "selected" : "") + ">" + e.name + "</option>"
                }) + "</select>"
                  , m = '<div id="modal-password-content" class="rider-content"><p>&nbsp;物流平台：' + d + '</p><p><span class="c-red">*</span>骑手姓名：<input type="text" class="J-rider-name form-control" value="' + c + '" style="width:150px;display: inline-block;"></p><p><span class="c-red">*</span>骑手电话：<input type="text" class="J-rider-phone form-control" value="' + p + '" style="width:150px;display: inline-block;"></p></div>'
                  , v = s({
                    title: "自配送骑手信息",
                    content: m,
                    btns: [{
                        txt: "确定",
                        fn: function() {
                            var e = $(".J-rider-name", v).val()
                              , s = $(".J-rider-phone", v).val()
                              , d = $(".J-logistics-plat", v).val();
                            return e ? n.checkPhone(s) ? void $.ajax({
                                type: "POST",
                                url: i.order.sc.reportRiderInfo,
                                data: {
                                    wmPoiId: r,
                                    wmOrderViewId: o,
                                    logisticsPlatCode: d,
                                    riderPhone: s,
                                    riderName: e
                                },
                                success: function(e) {
                                    0 == e.code ? (a.showTip("信息设置成功"),
                                    l.initDeliveryDOM(t)) : a.showTip(e.msg),
                                    v.modal("hide")
                                }
                            }) : void a.showTip("请输入正确的手机号", "warn") : void a.showTip("请输入骑手姓名", "warn")
                        }
                    }, {
                        txt: "取消",
                        fn: function() {}
                    }]
                })
            });
            var m = a.url2Cid();
            m && a.reportMC("b_shangou_online_e_i23wpqiz_mc", m)
        },
        _getLogisticsplats: function(e, t) {
            var o = this;
            o.logisticsPlats[e] && o.logisticsPlats[e].length ? t && t(o.logisticsPlats[e]) : $.ajax({
                type: "GET",
                url: i.order.sc.getLogisticsplats,
                data: {
                    type: e
                },
                success: function(i) {
                    0 == i.code ? (o.logisticsPlats[e] = i.data,
                    o.logisticsPlats[e].unshift({
                        code: "",
                        name: "-请选择" + (2 == e ? "物流" : "配送") + "平台-"
                    }),
                    t && t(i.data)) : a.showTip(i.msg)
                }
            })
        },
        addb2cLogisticsInfo: function(e, t, i) {
            var o = $(e.target).parents(".order")
              , n = o.attr("data-view-id")
              , s = o.data("poi-id")
              , r = $(e.target).parents(".J-delivery-section")
              , d = r.data("multiExpressInfo")
              , c = r.attr("data-delivery-id");
            c && (c = c.split("_")[1]),
            this._getLogisticsplats(2, function(e) {
                f.logisticsPlatformList = e,
                f.jQorder = o,
                f.wmViewId = n,
                f.wmPoiId = s,
                f.callback = t,
                f.jQbtn = i,
                f.warehouseId = c,
                f.initPackagesInfo(d),
                f.logisticsModalVisible = !0
            });
            var l = a.url2Cid();
            l && a.reportMC("b_shangou_online_e_jq558tx8_mc", l)
        },
        changeTip: function(e) {
            var t = this
              , i = $(e.target).parents(".order")
              , o = i.attr("data-view-id")
              , n = $(e.target).data("status")
              , r = $(e.target).parents(".J-delivery-section").data("tipAmount")
              , d = "";
            d = r > 0 ? "修改小费" : "加小费",
            a.reportMC("b_medicine_health_e_oheocg9b_mc", "c_medicine_health_e_7zcx7p0l");
            var c = '<div id="modal-password-content" class="J-password-content tip-content"><p>加点小费，更易接单~</p><p>小费额度：<input type="text" class="J-tip-amount form-control" value="' + (r > 0 ? r : 1) + '" style="width:120px;display: inline-block;"> 元（最高20元）</p></div>'
              , l = s({
                title: d,
                content: c,
                btns: [{
                    txt: "确定",
                    fn: function() {
                        t._checkData(n, o, l)
                    }
                }, {
                    txt: "取消",
                    fn: function() {}
                }]
            })
        },
        _checkData: function(e, t, i) {
            var o = this
              , n = $(".J-tip-amount").val()
              , s = $("#" + t)
              , r = s.find(".J-delivery-section")
              , d = parseFloat(r.data("tipAmount"));
            if (0 > n || 0 == d && 0 >= n)
                return a.showTip("保存失败，小费金额需大于0", "warn", 3e3),
                !1;
            if (n > 20)
                return a.showTip("保存失败，小费最高金额为20元", "warn", 3e3),
                !1;
            if (n != parseFloat(n))
                return a.showTip("请输入有效的小费金额", "warn", 3e3),
                !1;
            if (!/^(-?\d+)(\.\d{0,1})?$/.test(n))
                return a.showTip("最多支持一位小数", "warn", 3e3),
                !1;
            if (n = parseFloat(n),
            e === w.INIT || e === w.CANCELLED || e === w.PREORDER)
                n == d ? i.modal("hide") : (s.find(".J-delivery-section").data("tipAmount", n),
                r.find(".J-ship-tip").text(n),
                r.find(".J-tip-operation").text("修改小费")),
                i.modal("hide");
            else if (e === w.WAITING || e === w.WAITING_NEW || e === w.WAITING_2)
                if (n == d)
                    i.modal("hide");
                else {
                    if (d > n)
                        return a.showTip("保存失败，不能小于上次小费金额", "warn", 3e3),
                        !1;
                    o._addTip(t, i)
                }
        },
        _addTip: function(e, t) {
            var o = $(".J-tip-amount").val()
              , n = $("#" + e)
              , s = n.data("poi-id")
              , r = n.attr("data-view-id")
              , d = n.find(".J-delivery-section");
            $.ajax({
                type: "POST",
                url: i.order.addTipAmount,
                data: {
                    wmOrderViewId: r,
                    wmPoiId: s,
                    tipAmount: o
                },
                success: function(e) {
                    0 == e.code ? (a.showTip("小费修改成功"),
                    d.data("tipAmount", o),
                    l.initDeliveryDOM(n),
                    t.modal("hide")) : a.showTip(e.msg)
                }
            })
        },
        confirmDelivery: function(t, o) {
            var n = $(t.target)
              , r = n.parents(".order");
            if (!n.hasClass("disabled")) {
                var d = r.attr("data-view-id")
                  , c = r.data("poiId")
                  , l = r.data("userId")
                  , p = r.data("poiName")
                  , u = s({
                    noHeader: !0,
                    content: '<div class="font-16 mb5">即将通知预订人，请确认商品已送达</div>如需修改发送文案，请在系统设置—聊天设置中进行配置',
                    btns: [{
                        txt: "确定",
                        fn: function() {
                            a.reportMC("b_shangou_online_e_w7xjf201_mc", "c_nehoktcu", {
                                acctId: e.getCookie("acctId")
                            }),
                            $.ajax({
                                url: i.order.completeDelivery,
                                type: "POST",
                                data: {
                                    orderViewId: d,
                                    wmPoiId: c
                                },
                                success: function(e) {
                                    e.code ? a.showTip(e.msg, "error") : (n.text("已通知预订人").addClass("disabled").removeClass("btn-stable"),
                                    parent.startChat({
                                        wmUserId: l,
                                        orderViewId: d,
                                        wmPoiId: c,
                                        wmPoiName: p,
                                        channelId: 1001
                                    }),
                                    u.modal("hide"))
                                }
                            })
                        }
                    }, {
                        txt: "取消",
                        fn: function() {}
                    }]
                })
                  , m = a.url2Cid();
                m && a.reportMC("b_shangou_online_e_wv7e9b99_mc", m, null, null, {
                    order_id: d
                })
            }
        },
        bindEvts: function() {
            var t = this
              , i = $(document);
            i.off("click", ".J-send-delivery-myself").off("click", ".J-send-dev-myself").off("click", ".J-send-delivery").off("click", ".J-send-juhe-delivery").off("click", ".J-cancel-delivery").off("click", ".J-vote-delivery").off("click", ".J-complain-rider").off("click", ".J-tip-operation").off("click", ".J-change-logistics").off("click", ".J-sc-input-rider").off("click", ".J-check-phone").off("click", ".J-confirm-delivery"),
            i.on("click", ".J-send-delivery-myself", t.sendDeliverySelf.bind(t)).on("click", ".J-send-dev-myself", t.sendDevSelf.bind(t)).on("click", ".J-send-delivery", t.sendDelivery.bind(t)).on("click", ".J-send-juhe-delivery", t.sendJuHeDelivery.bind(t)).on("click", ".J-cancel-delivery", t.cancelDelivery.bind(t)).on("click", ".J-vote-delivery", t.voteDispatcher.bind(t)).on("click", ".J-change-logistics", t.addb2cLogisticsInfo.bind(t)).on("click", ".J-sc-input-rider", t.addSelfDeliveryRiderInfo.bind(t)).on("click", ".J-complain-rider", t.complainRider.bind(t)).on("click", ".J-tip-operation", t.changeTip.bind(t)).on("click", ".J-check-phone", t.getDeliveryPhone.bind(t)).on("click", ".J-confirm-delivery", t.confirmDelivery.bind(t)),
            i.on("change", "#J-upload-img", t.uploadImg),
            i.on("click", ".new-b2c-order", function(t) {
                var i = $(t.target).parents(".order")
                  , o = i.attr("data-id")
                  , n = i.attr("data-view-id")
                  , s = e.getCookie("acctId")
                  , r = i.data("poiName")
                  , d = i.data("poiId");
                a.reportMC("b_medicine_health_e_bw16wqok_mc", "c_medicine_health_e_2n2ud9i8", {
                    poi_id: d,
                    acct_id: s,
                    order_view_id: n
                }),
                m.selectWmPoi({
                    wmPoiId: d,
                    wmPoiName: r,
                    jumpUrl: "/page/medicine/e/b2cOrder/#/detail?orderViewId=" + n + "&wmPoiId=" + d + "&orderId=" + o
                })
            });
            var o;
            i.on("click", ".J-select-btn", function() {
                var i = e.getCookie("acctId")
                  , a = e.getCookie("token")
                  , n = t.activityData
                  , r = n.shippingFee
                  , d = n.distance
                  , c = n.bmCityId
                  , l = n.couponId
                  , p = n.activityId
                  , u = t.orderData.wmPoiId
                  , m = ""
                  , v = location.href
                  , f = ""
                  , h = "https://peisong.meituan.com";
                -1 !== v.indexOf("develop") ? h = "http://page.banma.dev.sankuai.com" : -1 !== v.indexOf("test") || -1 !== v.indexOf("beta") ? h = "http://page.banma.test.sankuai.com" : (-1 !== v.indexOf("staging") || -1 !== v.indexOf("st.sankuai")) && (h = "https://page.banma.st.sankuai.com"),
                f += h + "/paotuibpc/page/select.shtml",
                f += "?accountId=" + i + "&accessToken=" + a + "&money=" + r,
                f += "&cityId=" + c + "&wmPoiId=" + u + "&distance=" + d,
                $(this).hasClass("J-select-coupon") ? (f += "&layout=coupons&selectId=" + l,
                m = "选择优惠券") : (f += "&layout=activity&selectId=" + p,
                m = "选择活动"),
                o = s({
                    title: m,
                    content: '<iframe src="' + f + '" frameborder="0"></iframe>',
                    btns: [],
                    size: "modal-md",
                    "class": "select-activity"
                })
            }),
            window.addEventListener("message", function(i) {
                o && o.modal("hide");
                var a = i.data;
                "coupons" === a.type ? (t.activityData.couponId = a.id,
                t.activityData.couponSource = a.couponSource,
                t.activityData.couponViewId = a.couponViewId,
                t._getActivityInfo(t.jQbtn, t.activityData)) : "activity" === a.type ? (t.activityData.activityId = a.id,
                t.activityData.couponSource = a.couponSource,
                t.activityData.couponViewId = a.couponViewId,
                t._getActivityInfo(t.jQbtn, t.activityData)) : "url" === a.type && (e.setCookie("wmPoiId", t.orderData.wmPoiId),
                r.go(a.url),
                location.reload())
            });
            var n = 0;
            i.on("keyup", ".J-tip-amount-dialog", function(e) {
                clearTimeout(n);
                var i = $(this).val();
                n = setTimeout(function() {
                    return i || (i = 0),
                    0 > i ? (a.showTip("小费金额需大于0", "warn", 3e3),
                    !1) : i > 20 ? (a.showTip("小费最高金额为20元", "warn", 3e3),
                    !1) : i != parseFloat(i) ? (a.showTip("请输入有效的小费金额", "warn", 3e3),
                    !1) : (t.activityData.tipAmount = parseFloat(i),
                    void t._getActivityInfo(t.jQbtn, t.activityData))
                }, 500)
            }),
            i.on("click", ".J-check-detail", function() {
                var e = $(this).data("shippingFeeDetailVo")
                  , t = '<p class="clearfix"><strong class="pull-left">基础运费</strong><span class="pull-right color-666">&yen;' + e.shippingFeeBase + "</span></p>";
                if (e.extraFee && (t += '<p class="clearfix"><strong class="pull-left">临时加价</strong><span class="pull-right color-666">&yen;' + e.extraFee + "</span></p>"),
                e.couponAmount && (t += '<p class="clearfix"><span class="pull-left">优惠券</span><span class="pull-right c-red">&yen;' + e.couponAmount + "</span></p>"),
                e.activityAmount && (t += '<p class="clearfix"><span class="pull-left">' + e.activityName + '</span><span class="pull-right c-red">&yen;' + e.activityAmount + "</span></p>"),
                e.tipAmount && (t += '<p class="clearfix"><span class="pull-left">小费</span><span class="pull-right color-666">&yen;' + e.tipAmount + "</span></p>"),
                t += "<hr>",
                t += '<p class="clearfix mt10"><strong class="pull-left">实付金额</strong><span class="pull-right c-red">&yen;' + e.payAmount + "</span></p>",
                0 !== e.payType) {
                    var i = 1 === e.payType ? "账户余额" : "订单款";
                    t += '<p class="clearfix"><strong class="pull-left">支付方式</strong><span class="pull-right color-666">' + i + "</span></p>"
                }
                o = s({
                    title: "查看明细",
                    content: t,
                    btns: []
                })
            }),
            i.on("click", ".J-delete-img", function() {
                $(this).parent().remove(),
                $(".J-add-img-box").show()
            })
        }
    };
    y.bindEvts()
});
define("widgets/refund_tips", ["module/interface", "util/utils", "widgets/normal_dialog"], function(e, t, n) {
    function o() {
        $.ajax({
            type: "POST",
            url: e.order.refundAgree,
            success: function(e) {
                0 === e.code && (t.showTip("退款处理时长已变更，请及时处理退款请求"),
                setTimeout(function() {
                    window.location.reload()
                }, 1500))
            }
        })
    }
    if (window !== window.top) {
        var i = new Date
          , a = new Date(i.getTime() - 864e5)
          , d = i.getDate()
          , r = a.getDate()
          , s = "displayTime" + d
          , u = parseInt(t.getStorage(s) || 0);
        t.removeStorage("displayTime" + r),
        3 > u && $.ajax({
            type: "GET",
            url: e.order.refundAgreeOrNot,
            success: function(e) {
                if (0 === e.code && e.data === !1) {
                    var i = n({
                        title: "退款处理时长缩短",
                        content: "为提升顾客退款效率，商家退款处理时长缩短为30分钟（部分商家为3小时），请您及时处理退款申请，以免餐损",
                        btns: [{
                            txt: "同意",
                            fn: function() {
                                i.modal("hide"),
                                o()
                            }
                        }]
                    });
                    i.on("hide.bs.modal", function(e) {
                        t.setStorage(s, u + 1)
                    })
                }
            }
        })
    }
});
define("widgets/im_tip", ["module/interface", "util/utils", "module/cookie", "widgets/normal_dialog"], function(t, e, o, i) {
    if (window !== window.top) {
        var a = o.getCookie("acctId")
          , s = o.getCookie("wmPoiId")
          , g = "food" === CommConstants.shopCate
          , n = localStorage.getItem("poiImSwitch")
          , h = localStorage.getItem("isChainNew")
          , m = new Date
          , l = new Date(m.getTime() - 864e5)
          , w = m.getDate()
          , r = l.getDate()
          , S = "imShowTimeToday" + w
          , c = e.getStorage(S)
          , d = parseInt(e.getStorage("imShowTime")) || 0;
        if (hasShowDialogList = e.getStorage("hasShowDialogList"),
        e.removeStorage("imShowTimeToday" + r),
        !c && 5 > d && "true" === h && $.ajax({
            type: "GET",
            url: t.root.containsIm,
            data: {
                acctId: a
            },
            success: function(t) {
                0 === t.code && t.data === !0 && (parent.globalPoptip.showImTip(),
                e.setStorage(S, "1"),
                e.setStorage("imShowTime", d + 1))
            }
        }),
        -1 != s && g && "false" == n && (!hasShowDialogList || -1 === hasShowDialogList.indexOf(s))) {
            i({
                title: "",
                content: '<img src="/static/62416314/imgs/imTips.webp" style="width: 360px;">',
                btns: [{
                    txt: "立即开启",
                    fn: function() {
                        parent.location.hash = "/v2/shop/systemSettings/r/im"
                    }
                }],
                "class": "im-feature-tip-dialog",
                noHeader: !0
            });
            hasShowDialogList ? e.setStorage("hasShowDialogList", hasShowDialogList + "," + s) : e.setStorage("hasShowDialogList", s)
        }
    }
});
define('module/order/order_common', ["module/cookie", "util/template", "module/interface", "module/order/copyorder", "module/order/printorder", "util/utils", "widgets/status_button", "widgets/normal_dialog", "components/img_verify", "module/order/order_delivery_operate", "widgets/refund_tips", "widgets/im_tip"], function(e, a, i, o, t, n, d, r, s, c, l, p) {
    "use strict";
    function u(e) {
        if (n.showTip("订单处理成功！请到“已处理”中查看"),
        $("#" + e).length > 0) {
            $("#" + e).remove();
            var a = localStorage.getItem("count")
              , i = a - 1;
            0 > i && (i = 0),
            f.updateCount(i)
        }
    }
    $("#statistics").click(function() {
        var a = e.getCookie("wmPoiId");
        return -1 == a ? void n.showTip("请先切换到具体的门店再进行汇总单打印！") : void t.printDayStatistics()
    }),
    $(document).on("click", ".J-display-more", function() {
        $(this).parents(".J-drop-parent").toggleClass("opened");
        var e = $(this).find("i").length > 0 ? $(this).find("i") : $(this);
        e.data("toggleClass");
        e.hasClass("fa-angle-up") || e.hasClass("fa-angle-down") ? e.toggleClass("fa-angle-up fa-angle-down") : (e.hasClass("glyphicon-triangle-bottom") || e.hasClass("glyphicon-triangle-top")) && e.toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
    }),
    $(document).delegate(".J-cancel-order", "click", function() {
        var e = $(this).parents(".order")
          , a = e.attr("data-view-id")
          , i = e.data("poiId")
          , o = $("body");
        o.attr("viewId", a),
        o.data("poiId", i),
        $.ajax({
            url: "/common/status",
            data: {
                orderId: a,
                poiId: i
            },
            success: function(e) {
                0 == e.code && m(a, e.data, i)
            },
            error: function() {
                n.showTip("操作失败，请重试")
            }
        });
        var t = n.url2Cid();
        t && n.reportMC("b_shangou_online_e_0lp7sgr1_mc", t)
    });
    var h = function(a, o) {
        for (var t = $("body").data("poiId"), d = $("body").attr("viewId"), r = e.getCookie("token"), s = e.getCookie("acctId"), c = $('input[name="cancelRadio"]:checked').attr("id") || 0, l = $('input[name="cancelRadio"]:checked').parents("li").find(".subRadio").find(":checked"), p = $("#remark").val(), u = "", h = 0; h < l.length; h++)
            u += l[h].value + ",";
        u && (u = u.substr(0, u.length - 1));
        var f = function() {
            var e, l = $("#acquire-page").length, h = {
                acctId: s,
                appType: "3",
                token: r,
                reasonId: c,
                subRadioId: u,
                remark: p,
                isInNewOrder: a
            };
            l ? (t = $("body").data("poiId"),
            h.wmOrderViewId = d,
            h.wmPoiId = t,
            e = i.order.cancelAcquiredOrder) : (h.orderId = d,
            h.wmPoiId = t,
            e = i.order.cancelOrder),
            $.ajax({
                type: "POST",
                url: e,
                data: h,
                success: function(e) {
                    0 != e.code ? (alert(e.msg),
                    location.href.indexOf("reminder") > -1 ? setTimeout(function() {
                        window.location.reload()
                    }, 1500) : window.location.reload()) : ("function" == typeof o && o(d),
                    location.href.indexOf("reminder") > -1 ? setTimeout(function() {
                        window.location.reload()
                    }, 1500) : setTimeout(function() {
                        window.location.reload()
                    }, 1e3))
                },
                error: function() {
                    n.showTip("操作失败，请重试")
                }
            })
        };
        0 === c ? n.showTip("请先选择取消订单的原因！") : 12002 == c && u ? confirm("“确定要暂停营业吗？") && f() : 12001 == c ? "" == u ? alert("您必须暂停售卖至少一样" + CommConstants.shopCategoryObj.merchandiseG + "！") : confirm("您确认要停售该" + CommConstants.shopCategoryObj.merchandiseG + "吗？") && f() : 12003 == c ? confirm("您确认要打烊吗？") && f() : 12999 == c && "" == p ? n.showTip("取消原因不能为空！") : f()
    }
      , f = parent.NewOrder
      , m = function(e, a, o) {
        $.ajax({
            url: i.order.getCancelReasons,
            data: {
                appType: "3",
                wmPoiId: o,
                wmOrderViewId: e
            },
            success: function(e) {
                if (0 == e.code) {
                    var i = [];
                    i.push('<div id="modal-data-content"><ul class="radio">'),
                    $.each(e.data, function(e, o) {
                        i.push("<li cancelId=" + e + '><label class="label-radio"><input type="radio"  onclick="checkRadio(this)"  name="cancelRadio" id="' + o.id + '" style="width:15px;"><span class="custom-radio"></span> ' + o.remark + "</label>"),
                        12001 == o.id ? i.push('<div id="cancelHandle" class="subRadio"><div>选择此项，将暂停售卖相应' + CommConstants.shopCategoryObj.merchandiseG + "。暂停售卖的可以在" + CommConstants.shopCategoryObj.merchandiseG + '管理中恢复售卖。<i class="ct-lred">您必须暂停售卖至少一样' + CommConstants.shopCategoryObj.merchandiseG + '。</i></div><div id="cancelLoading"></div></div>') : 12002 == o.id && 3 != a ? (i.push('<div class="subRadio"><div class="color-999 mb5">暂时停止营业（可随时恢复营业）</div>'),
                        i.push('<span class="color-666">暂时休息：</span>'),
                        i.push('<label class="label-radio inline"><input type="radio" name="busy" value="1" checked><span class="custom-radio"></span>10分钟</label>'),
                        i.push('<label class="label-radio inline"><input type="radio" name="busy" value="2"><span class="custom-radio"></span>20分钟</label>'),
                        i.push('<label class="label-radio inline"><input type="radio" name="busy" value="3"><span class="custom-radio"></span>30分钟</label>'),
                        i.push("</div>")) : 12003 == o.id && 3 != a ? i.push('<div class="subRadio color-999"><div>1. 选择店铺打烊，门店将休息365天，期间您可自行恢复营业；</div><div>2. 如本时段长期不营业，可在店铺设置-门店管理中调整<a href="/v2/shop/manage/shopInfo#foot">营业时间</a></div></div>') : 12999 == o.id ? i.push('<div class="subRadio color-999"><div>* 请填写此订单无效的原因（不能超过100字）</div><textarea id="remark" maxlength="100" class="mt5"></textarea></div>') : 12004 == o.id && i.push('<div class="subRadio color-999">如您的配送地址有误，可在店铺设置中调整<a href="javascript:;" data-url="/v2/shop/manage/distributionSettings" class="page-jump">配送设置</a>。</div>'),
                        i.push("</li>")
                    }),
                    i.push("</ul></div>");
                    r({
                        title: "取消原因",
                        content: i.join(""),
                        btns: [{
                            txt: "确定",
                            fn: function() {
                                location.href.indexOf("receive/unprocessed") > -1 ? h(1, function(e) {
                                    u(e)
                                }) : h(0, function(e) {
                                    $("#" + e).remove()
                                })
                            }
                        }, {
                            txt: "取消",
                            fn: function() {}
                        }]
                    })
                }
            },
            error: function() {
                n.showTip("操作失败，请重试")
            }
        })
    };
    return window.checkRadio = function(a) {
        var i = e.getCookie("wmPoiId")
          , o = e.getCookie("token")
          , t = e.getCookie("acctId")
          , n = $(a)
          , d = n.parents("li");
        $.each($(".subRadio"), function(e, a) {
            $(a).css("display", "none")
        }),
        d.find(".subRadio").css("display", "block");
        var r = n.attr("id");
        if (12001 != r) {
            if ($("#cancelLoading").text(""),
            12002 == r || 12003 == r) {
                var s = $("#select_poi_status_button_text").text();
                "[已停止营业]" == s.trim() && d.find(".subRadio").css("display", "none")
            }
        } else {
            var c = $("body").attr("viewId")
              , i = $("body").data("poiId");
            $("#cancelHandle").css("display", "none"),
            $.post("/api/order/cancelReasons/foods", {
                wmPoiId: i,
                token: o,
                acctId: t,
                orderId: c
            }, function(e) {
                var a = e.data.length;
                if (a > 0) {
                    $("#cancelHandle").css("display", "block");
                    for (var i = '<table class="table table-bordered"><thead><tr><th width="100" class="th-inner"><div>商品名称</div></th><th width="50" class="th-inner"><div>暂停售卖</div></th></tr></thead><tbody>', o = 0; a > o; o++)
                        i += '<tr><td class="th-inner"><div>' + e.data[o].name + '</div></td><td class="th-inner"><div><label class="label-checkbox inline"><input type="checkbox" value="' + e.data[o].id + '" checked><span class="custom-checkbox"></span></label></div></td></tr>';
                    i += "</tbody></table>",
                    $("#cancelLoading").text(""),
                    $("#cancelLoading").append(i)
                } else
                    d.find(".subRadio").css("display", "none")
            })
        }
    }
    ,
    $(".J-status input").click(function() {
        var e = $(this)
          , a = e.data("url");
        e.prop("checked") && a && (parent.window.location.hash = a)
    }),
    $(document).delegate(".J-print-order", "click", t.printOrder),
    $(document).delegate(".J-copy-order", "click", o.copyOrder),
    $(document).on("mouseover", ".J-check-details", function() {
        var e = $(this)
          , a = e.parents(".order");
        e.next().show(),
        e.hasClass("tip") && !e.data("hasLoadTip") && $.ajax({
            url: "/v2/order/history/r/charge/tip",
            data: {
                wmOrderViewId: a.attr("data-view-id"),
                wmPoiId: a.data("poi-id")
            },
            success: function(a) {
                if (0 == a.code) {
                    e.data("hasLoadTip", !0);
                    var i = a.data.formulaDisplay
                      , o = a.data.formulaDetail
                      , t = "";
                    i ? e.next().find(".J-charge-tip").text(i) : o && o.length && (o.forEach(function(e) {
                        e.fee && (t += "<p><span>" + e.name + "</span><span>-￥" + e.fee + "</span></p>")
                    }),
                    e.next().find(".J-charge-content").html(t))
                }
            }
        })
    }).on("mouseout", ".J-check-details", function() {
        $(this).next().hide()
    }),
    $(document).on("click", ".J-start-chat", function() {
        var e = $(this).parents(".J-order")
          , a = e.data("userId")
          , i = e.data("poiId")
          , o = e.data("poiName")
          , t = e.attr("data-view-id");
        parent.startChat({
            wmUserId: a,
            orderViewId: t,
            wmPoiId: i,
            wmPoiName: o,
            channelId: 1001
        });
        var d = n.url2Cid();
        d && n.reportMC("b_6ahkh0xt", d)
    }),
    $(document).on("click", ".J-order-detail", function() {
        var e = $(this).parents(".J-order")
          , a = e.data("poi-id")
          , i = e.data("view-id")
          , o = location.href.split("/order/") && location.href.split("/order/")[1]
          , t = "/page/ysorder#/detail?orderViewId=" + i + "&poiId=" + a + "&isFromOrder=" + encodeURIComponent(o);
        parent.window.location.hash = t
    }),
    $(document).on("click", ".J-get-real-info", function() {
        function e(e) {
            "phone" === i && e.Recipient_Phone && r.text(e.Recipient_Phone),
            "backPhone" === i && e.Recipient_bindedPhone && s.text(e.Recipient_bindedPhone),
            "addr" === i && (e.Recipient_Address && c.text(e.Recipient_Address),
            t.find(".hide-phone-address").removeClass("hide-phone-address")),
            "orderPhone" === i && e.order_phone && d.text(e.order_phone),
            a.hide()
        }
        var a = $(this)
          , i = a.data("type")
          , o = a.parents(".J-order");
        if ("orderPhone" === i)
            var t = o.find(".J-order-user-phone")
              , d = t.find(".J-order-user-phone-main");
        else
            var t = o.find(".J-user-phone-address")
              , r = t.find(".J-user-phone-main")
              , s = t.find(".J-user-phone-back")
              , c = t.find(".J-user-address");
        var l = t.data("real-info")
          , p = o.attr("data-view-id")
          , u = o.data("poiId");
        l ? e(JSON.parse(l)) : $.ajax({
            url: "/v2/order/receive/processed/r/querywithin3h",
            data: {
                orderViewId: p,
                wmPoiId: u
            },
            success: function(a) {
                if (0 == a.code) {
                    var i = a.data;
                    t.data("real-info", JSON.stringify(i)),
                    e(i)
                } else
                    n.showTip("获取信息失败，请稍后再试")
            },
            error: function() {
                n.showTip("获取信息失败，请稍后再试")
            }
        });
        var h = n.url2Cid();
        h && n.reportMC("b_shangou_online_e_fimtl8a9_mc", h)
    }),
    $(document).on("click", ".J-get-cycle-privacy-phone", function() {
        function e(e) {
            var i = ""
              , o = e.backup_privacy_phones || [];
            e.privacy_phone && c.text(e.privacy_phone.replace(",", " 转 ")),
            o.forEach(function(e, a) {
                i += '<div><span class="phone-title color-999">备用号码' + (o.length > 1 ? a + 1 : "") + "</span>" + e + "</div>"
            }),
            l.html(i),
            a.hide()
        }
        var a = $(this)
          , o = a.parents(".J-order")
          , t = a.data("type")
          , d = o.attr("data-view-id")
          , r = o.data("poiId")
          , s = o.find(".J-user-phone-address")
          , c = s.find(".J-user-privacy-phone-main")
          , l = s.find(".J-user-backup-phone-main");
        $.ajax({
            url: i.order.sc.cycleOrderPrivacyPhone,
            data: {
                orderViewId: d,
                wmPoiId: r,
                type: +t
            },
            success: function(a) {
                if (0 == a.code) {
                    var i = a.data;
                    e(i)
                } else
                    n.showTip("获取信息失败，请稍后再试")
            },
            error: function() {
                n.showTip("获取信息失败，请稍后再试")
            }
        });
        var p = n.url2Cid();
        p && n.reportMC("b_shangou_online_e_fimtl8a9_mc", p)
    }),
    {
        cancelClick: h,
        getCancelReasonList: m
    }
});
define('widgets/lazyload', [], function() {
    var n = function(n) {
        var r = 0;
        n.css("background", "#ccc");
        var t = function() {
            for (var t = r; t < n.length; t++)
                i(n[t]) && (c(n[t]),
                r = t)
        }
          , i = function(n) {
            var r = n.getBoundingClientRect()
              , t = window.innerHeight;
            return r.top <= t + 100
        }
          , c = function(n) {
            n.src || (n.src = $(n).data("original"))
        }
          , o = function(n, r) {
            var t = null;
            return function() {
                var i = new Date
                  , c = this
                  , o = arguments;
                t || (t = i);
                var a = i - t;
                r && a >= r && (n.apply(c, o),
                t = i)
            }
        };
        t(),
        window.onscroll = o(t, 500)
    };
    return n
});
define('widgets/check_bigPic', ["widgets/normal_dialog"], function(i) {
    function a(i, a, s, d) {
        var c = i.length
          , l = ""
          , t = "";
        0 !== a || d || (l = "disabled"),
        a !== c - 1 || d || (t = "disabled");
        var e = '<div class="mask mask-background J-mask"><div class="con"><div class="pull-left arrows arrows-l"><i class="fa fa-angle-left J-change-pic left ' + l + '"></i></div><div class="pull-left main"><div class="img-wrapper"><img src="' + i[a] + '" alt="" class="J-img"></div><div class="img-detail m-top-sm J-width"><span class="img-num J-img-num">' + (a + 1) + "/" + c + '</span><a href="' + i[a] + '" class="check-img J-check-img" target="_blank">查看原图</a></div><div class="description m-top-sm J-width"><div>' + s + '</div></div></div><div class="pull-left arrows arrows-r"><i class="fa fa-angle-right J-change-pic ' + t + '"></i></div><div class="close-img J-close-img fa fa-custom-info-error"></div></div></div>';
        $("body").append(e),
        $(".J-width").width($(".J-img").width()),
        $(".J-change-pic").on("click", function() {
            c > 1 && $(".J-mask").find(".J-change-pic").removeClass("disabled"),
            $(this).hasClass("left") ? (a--,
            0 > a && (a = d ? c - 1 : 0),
            0 >= a && !d && $(this).addClass("disabled")) : (a++,
            a > c - 1 && (a = d ? 0 : c - 1),
            a >= c - 1 && !d && $(this).addClass("disabled")),
            $(".J-img").attr("src", i[a]),
            $(".J-img-num").text(a + 1 + "/" + c),
            $(".J-check-img").attr("href", i[a]),
            $(".J-width").width($(".J-img").width())
        }),
        $(".J-close-img").on("click", function() {
            $(".J-mask").remove()
        })
    }
    $(document).on("click", ".J-img-item", function() {
        var i = $(this).parents(".J-img-wrapper")
          , s = $(this).index()
          , d = i.data("des") || ""
          , c = i.find(".J-img-item")
          , l = i.data("loop") === !0 ? !0 : !1
          , t = [];
        c.each(function(i, a) {
            var s = $(a).data("src")
              , d = $(a).attr("src");
            s ? t.push(s) : t.push(d)
        }),
        a(t, s, d, l)
    })
});
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function(r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r)
              , a = (o || r).length
              , c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c],
            c += n),
            t(r, e, u, o, c, a)
        }
    }
    function t(n) {
        return function(t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t))
                    return i;
            return -1
        }
    }
    function r(n, t, r) {
        return function(e, u, i) {
            var o = 0
              , a = O(e);
            if ("number" == typeof i)
                n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a)
                return i = r(e, u),
                e[i] === u ? i : -1;
            if (u !== u)
                return i = t(l.call(e, o, a), m.isNaN),
                i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u)
                    return i;
            return -1
        }
    }
    function e(n, t) {
        var r = I.length
          , e = n.constructor
          , u = m.isFunction(e) && e.prototype || a
          , i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; )
            i = I[r],
            i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this
      , i = u._
      , o = Array.prototype
      , a = Object.prototype
      , c = Function.prototype
      , f = o.push
      , l = o.slice
      , s = a.toString
      , p = a.hasOwnProperty
      , h = Array.isArray
      , v = Object.keys
      , g = c.bind
      , y = Object.create
      , d = function() {}
      , m = function(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m),
    exports._ = m) : u._ = m,
    m.VERSION = "1.8.3";
    var b = function(n, t, r) {
        if (t === void 0)
            return n;
        switch (null == r ? 3 : r) {
        case 1:
            return function(r) {
                return n.call(t, r)
            }
            ;
        case 2:
            return function(r, e) {
                return n.call(t, r, e)
            }
            ;
        case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u)
            }
            ;
        case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i)
            }
        }
        return function() {
            return n.apply(t, arguments)
        }
    }
      , x = function(n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    };
    m.iteratee = function(n, t) {
        return x(n, t, 1 / 0)
    }
    ;
    var _ = function(n, t) {
        return function(r) {
            var e = arguments.length;
            if (2 > e || null == r)
                return r;
            for (var u = 1; e > u; u++)
                for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                    var f = o[c];
                    t && r[f] !== void 0 || (r[f] = i[f])
                }
            return r
        }
    }
      , j = function(n) {
        if (!m.isObject(n))
            return {};
        if (y)
            return y(n);
        d.prototype = n;
        var t = new d;
        return d.prototype = null,
        t
    }
      , w = function(n) {
        return function(t) {
            return null == t ? void 0 : t[n]
        }
    }
      , A = Math.pow(2, 53) - 1
      , O = w("length")
      , k = function(n) {
        var t = O(n);
        return "number" == typeof t && t >= 0 && A >= t
    };
    m.each = m.forEach = function(n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))
            for (e = 0,
            u = n.length; u > e; e++)
                t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0,
            u = i.length; u > e; e++)
                t(n[i[e]], i[e], n)
        }
        return n
    }
    ,
    m.map = m.collect = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }
    ,
    m.reduce = m.foldl = m.inject = n(1),
    m.reduceRight = m.foldr = n(-1),
    m.find = m.detect = function(n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r),
        e !== void 0 && e !== -1 ? n[e] : void 0
    }
    ,
    m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = x(t, r),
        m.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n)
        }),
        e
    }
    ,
    m.reject = function(n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }
    ,
    m.every = m.all = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n))
                return !1
        }
        return !0
    }
    ,
    m.some = m.any = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n))
                return !0
        }
        return !1
    }
    ,
    m.contains = m.includes = m.include = function(n, t, r, e) {
        return k(n) || (n = m.values(n)),
        ("number" != typeof r || e) && (r = 0),
        m.indexOf(n, t, r) >= 0
    }
    ,
    m.invoke = function(n, t) {
        var r = l.call(arguments, 2)
          , e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }
    ,
    m.pluck = function(n, t) {
        return m.map(n, m.property(t))
    }
    ,
    m.where = function(n, t) {
        return m.filter(n, m.matcher(t))
    }
    ,
    m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t))
    }
    ,
    m.max = function(n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                e > i && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (u > o || u === -1 / 0 && i === -1 / 0) && (i = n,
                o = u)
            });
        return i
    }
    ,
    m.min = function(n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++)
                e = n[a],
                i > e && (i = e)
        } else
            t = x(t, r),
            m.each(n, function(n, r, e) {
                u = t(n, r, e),
                (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n,
                o = u)
            });
        return i
    }
    ,
    m.shuffle = function(n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
            t = m.random(0, i),
            t !== i && (u[i] = u[t]),
            u[t] = r[i];
        return u
    }
    ,
    m.sample = function(n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)),
        n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }
    ,
    m.sortBy = function(n, t, r) {
        return t = x(t, r),
        m.pluck(m.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function(n, t) {
            var r = n.criteria
              , e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return -1
            }
            return n.index - t.index
        }), "value")
    }
    ;
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = x(r, e),
            m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }),
            u
        }
    };
    m.groupBy = F(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }),
    m.indexBy = F(function(n, t, r) {
        n[r] = t
    }),
    m.countBy = F(function(n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }),
    m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }
    ,
    m.size = function(n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }
    ,
    m.partition = function(n, t, r) {
        t = x(t, r);
        var e = []
          , u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }),
        [e, u]
    }
    ,
    m.first = m.head = m.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }
    ,
    m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }
    ,
    m.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }
    ,
    m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }
    ,
    m.compact = function(n) {
        return m.filter(n, m.identity)
    }
    ;
    var S = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0
                  , l = c.length;
                for (u.length += l; l > f; )
                    u[i++] = c[f++]
            } else
                r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function(n, t) {
        return S(n, t, !1)
    }
    ,
    m.without = function(n) {
        return m.difference(n, l.call(arguments, 1))
    }
    ,
    m.uniq = m.unique = function(n, t, r, e) {
        m.isBoolean(t) || (e = r,
        r = t,
        t = !1),
        null != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o]
              , f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c),
            i = f) : r ? m.contains(i, f) || (i.push(f),
            u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }
    ,
    m.union = function() {
        return m.uniq(S(arguments, !0, !0))
    }
    ,
    m.intersection = function(n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++)
                    ;
                o === r && t.push(i)
            }
        }
        return t
    }
    ,
    m.difference = function(n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n)
        })
    }
    ,
    m.zip = function() {
        return m.unzip(arguments)
    }
    ,
    m.unzip = function(n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)
            r[e] = m.pluck(n, e);
        return r
    }
    ,
    m.object = function(n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }
    ,
    m.findIndex = t(1),
    m.findLastIndex = t(-1),
    m.sortedIndex = function(n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i; ) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }
    ,
    m.indexOf = r(1, m.findIndex, m.sortedIndex),
    m.lastIndexOf = r(-1, m.findLastIndex),
    m.range = function(n, t, r) {
        null == t && (t = n || 0,
        n = 0),
        r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++,
        n += r)
            u[i] = n;
        return u
    }
    ;
    var E = function(n, t, r, e, u) {
        if (!(e instanceof t))
            return n.apply(r, u);
        var i = j(n.prototype)
          , o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function(n, t) {
        if (g && n.bind === g)
            return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))
            throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2)
          , e = function() {
            return E(n, e, t, this, r.concat(l.call(arguments)))
        };
        return e
    }
    ,
    m.partial = function(n) {
        var t = l.call(arguments, 1)
          , r = function() {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)
                i[o] = t[o] === m ? arguments[e++] : t[o];
            for (; e < arguments.length; )
                i.push(arguments[e++]);
            return E(n, r, this, this, i)
        };
        return r
    }
    ,
    m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e)
            throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++)
            r = arguments[t],
            n[r] = m.bind(n[r], n);
        return n
    }
    ,
    m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache
              , i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)),
            u[i]
        };
        return r.cache = {},
        r
    }
    ,
    m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }
    ,
    m.defer = m.partial(m.delay, m, 1),
    m.throttle = function(n, t, r) {
        var e, u, i, o = null, a = 0;
        r || (r = {});
        var c = function() {
            a = r.leading === !1 ? 0 : m.now(),
            o = null,
            i = n.apply(e, u),
            o || (e = u = null)
        };
        return function() {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this,
            u = arguments,
            0 >= l || l > t ? (o && (clearTimeout(o),
            o = null),
            a = f,
            i = n.apply(e, u),
            o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)),
            i
        }
    }
    ,
    m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null,
            r || (a = n.apply(i, u),
            e || (i = u = null)))
        };
        return function() {
            i = this,
            u = arguments,
            o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)),
            f && (a = n.apply(i, u),
            i = u = null),
            a
        }
    }
    ,
    m.wrap = function(n, t) {
        return m.partial(t, n)
    }
    ,
    m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    ,
    m.compose = function() {
        var n = arguments
          , t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--; )
                e = n[r].call(this, e);
            return e
        }
    }
    ,
    m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }
    ,
    m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)),
            1 >= n && (t = null),
            r
        }
    }
    ,
    m.once = m.partial(m.before, 2);
    var M = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n))
            return [];
        if (v)
            return v(n);
        var t = [];
        for (var r in n)
            m.has(n, r) && t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.allKeys = function(n) {
        if (!m.isObject(n))
            return [];
        var t = [];
        for (var r in n)
            t.push(r);
        return M && e(n, t),
        t
    }
    ,
    m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e
    }
    ,
    m.mapObject = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)
            e = u[a],
            o[e] = t(n[e], e, n);
        return o
    }
    ,
    m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = [t[u], n[t[u]]];
        return e
    }
    ,
    m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t
    }
    ,
    m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n)
            m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }
    ,
    m.extend = _(m.allKeys),
    m.extendOwn = m.assign = _(m.keys),
    m.findKey = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i],
            t(n[e], e, n))
                return e
    }
    ,
    m.pick = function(n, t, r) {
        var e, u, i = {}, o = n;
        if (null == o)
            return i;
        m.isFunction(t) ? (u = m.allKeys(o),
        e = b(t, r)) : (u = S(arguments, !1, !1, 1),
        e = function(n, t, r) {
            return t in r
        }
        ,
        o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a]
              , l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }
    ,
    m.omit = function(n, t, r) {
        if (m.isFunction(t))
            t = m.negate(t);
        else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }
    ,
    m.defaults = _(m.allKeys, !0),
    m.create = function(n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t),
        r
    }
    ,
    m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }
    ,
    m.tap = function(n, t) {
        return t(n),
        n
    }
    ,
    m.isMatch = function(n, t) {
        var r = m.keys(t)
          , e = r.length;
        if (null == n)
            return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u))
                return !1
        }
        return !0
    }
    ;
    var N = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof m && (n = n._wrapped),
        t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))
            return !1;
        switch (u) {
        case "[object RegExp]":
        case "[object String]":
            return "" + n == "" + t;
        case "[object Number]":
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)
                return !1;
            var o = n.constructor
              , a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor"in n && "constructor"in t)
                return !1
        }
        r = r || [],
        e = e || [];
        for (var c = r.length; c--; )
            if (r[c] === n)
                return e[c] === t;
        if (r.push(n),
        e.push(t),
        i) {
            if (c = n.length,
            c !== t.length)
                return !1;
            for (; c--; )
                if (!N(n[c], t[c], r, e))
                    return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length,
            m.keys(t).length !== c)
                return !1;
            for (; c--; )
                if (f = l[c],
                !m.has(t, f) || !N(n[f], t[f], r, e))
                    return !1
        }
        return r.pop(),
        e.pop(),
        !0
    };
    m.isEqual = function(n, t) {
        return N(n, t)
    }
    ,
    m.isEmpty = function(n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }
    ,
    m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }
    ,
    m.isArray = h || function(n) {
        return "[object Array]" === s.call(n)
    }
    ,
    m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }
    ,
    m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
        m["is" + n] = function(t) {
            return s.call(t) === "[object " + n + "]"
        }
    }),
    m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }
    ),
    m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ,
    m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n
    }
    ,
    m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }
    ,
    m.isNull = function(n) {
        return null === n
    }
    ,
    m.isUndefined = function(n) {
        return n === void 0
    }
    ,
    m.has = function(n, t) {
        return null != n && p.call(n, t)
    }
    ,
    m.noConflict = function() {
        return u._ = i,
        this
    }
    ,
    m.identity = function(n) {
        return n
    }
    ,
    m.constant = function(n) {
        return function() {
            return n
        }
    }
    ,
    m.noop = function() {}
    ,
    m.property = w,
    m.propertyOf = function(n) {
        return null == n ? function() {}
        : function(t) {
            return n[t]
        }
    }
    ,
    m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
        function(t) {
            return m.isMatch(t, n)
        }
    }
    ,
    m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++)
            e[u] = t(u);
        return e
    }
    ,
    m.random = function(n, t) {
        return null == t && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ,
    m.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , T = m.invert(B)
      , R = function(n) {
        var t = function(t) {
            return n[t]
        }
          , r = "(?:" + m.keys(n).join("|") + ")"
          , e = RegExp(r)
          , u = RegExp(r, "g");
        return function(n) {
            return n = null == n ? "" : "" + n,
            e.test(n) ? n.replace(u, t) : n
        }
    };
    m.escape = R(B),
    m.unescape = R(T),
    m.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r),
        m.isFunction(e) ? e.call(n) : e
    }
    ;
    var q = 0;
    m.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    }
    ,
    m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/
      , z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , D = /\\|'|\r|\n|\u2028|\u2029/g
      , L = function(n) {
        return "\\" + z[n]
    };
    m.template = function(n, t, r) {
        !t && r && (t = r),
        t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g")
          , u = 0
          , i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L),
            u = a + t.length,
            r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"),
            t
        }),
        i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj","_",i)
        } catch (a) {
            throw a.source = i,
            a
        }
        var c = function(n) {
            return o.call(this, n, m)
        }
          , f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}",
        c
    }
    ,
    m.chain = function(n) {
        var t = m(n);
        return t._chain = !0,
        t
    }
    ;
    var P = function(n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments),
                P(this, r.apply(m, n))
            }
        })
    }
    ,
    m.mixin(m),
    m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            P(this, r)
        }
    }),
    m.each(["concat", "join", "slice"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }),
    m.prototype.value = function() {
        return this._wrapped
    }
    ,
    m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
    m.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    })
}
).call(this);
//# sourceMappingURL=underscore-min.map;
define("lib/underscore.min", function() {});

define('util/scroll_ev', ["lib/underscore.min"], function(n) {
    "use strict";
    return function(n, o, e) {
        if ("function" == typeof e) {
            var t = window._.debounce
              , i = function() {
                o.each(function(o, t) {
                    var i = $(t)
                      , c = i.offset().top
                      , f = n.height()
                      , d = n.scrollTop();
                    c >= d && d + f > c && !i.data("viewed") && (i.data("viewed", !0),
                    document.body.contains(t) && e(i))
                })
            };
            i(),
            n.off("scroll"),
            n.on("scroll", t(i, 500))
        }
    }
});
define("module/order/order_list_dom_phone", [], function() {
    "use strict";
    return function(a, s) {
        "hide_address_flag"in a || (a.hide_address_flag = a.hide_flag);
        var e = a.hide_flag && 0 === a.encrypted
          , n = a.hide_address_flag && 0 === a.encrypted
          , t = a.is_use_privacy_phone
          , d = a.privacy_phone_status
          , p = a.privacy_phone && a.privacy_phone.replace(",", " 转 ")
          , i = a.backup_privacy_phones || []
          , o = a.recipient_phone
          , l = a.recipient_bindedPhone
          , r = a.is_display_bindedPhone
          , c = s ? a.four_level_address + a.recipient_address : a.recipient_address
          , h = a.mask_address
          , u = a.pick_type
          , _ = a.poi_latitude
          , b = a.poi_longitude
          , v = a.address_latitude
          , f = a.address_longitude
          , y = a.isCycleOrder
          , g = "";
        return t === !0 && (0 === d ? (1 === +y ? (g += '<div><span class="phone-title color-999">隐私号码</span><span class="J-user-privacy-phone-main">' + p + "</span>",
        e && (g += '<button class="J-get-cycle-privacy-phone btn btn-default btn-xs" data-type="1">点击查看</button>'),
        g += "</div>",
        g += '<div class="J-user-backup-phone-main">',
        i.forEach(function(a, s) {
            g += '<div><span class="phone-title color-999">备用号码' + (i.length > 1 ? s + 1 : "") + "</span>" + a + "</div>"
        }),
        g += "</div>") : (g += '<div><span class="phone-title color-999">隐私号码</span><span>' + p + "</span></div>",
        i.forEach(function(a, s) {
            g += '<div><span class="phone-title color-999">备用号码' + (i.length > 1 ? s + 1 : "") + "</span>" + a + "</div>"
        })),
        o && (g += '<div><span class="phone-title color-999">顾客电话</span><span class="J-user-phone-main">' + o + "</span></div>")) : (g += '<div><span class="phone-title color-999">顾客电话</span><span class="J-user-phone-main">' + o + "</span>",
        e && (g += '<button class="J-get-real-info btn btn-default btn-xs" data-type="phone">点击查看</button>'),
        g += "</div>")),
        t === !1 && (g += '<div><span class="phone-title color-999">顾客电话</span><span class="J-user-phone-main">' + o + "</span>",
        e && (g += '<button class="J-get-real-info btn btn-default btn-xs" data-type="phone">点击查看</button>'),
        g += "</div>",
        r && l && (g += '<div><span class="phone-title color-999">备用电话</span><span class="J-user-phone-back">' + l + "</span>",
        e && (g += '<button class="J-get-real-info btn btn-default btn-xs" data-type="backPhone">点击查看</button>'),
        g += "</div>")),
        (s || 0 === u) && (g += '<div><span class="phone-title color-999">顾客地址</span><span class="J-user-address ' + (n ? "hide-phone-address" : "") + '">' + c + "</span>",
        s || h || (g += ' <a href="javascript:void(0);" class="j-address color-link-dark ' + (n ? "hide-phone-address" : "") + '"><i class="j-show-map fa fa-map-marker font-12" data-addr="' + c + '" data-poi-lat="' + _ + '" data-poi-lng="' + b + '" data-order-lat="' + v + '" data-order-lng="' + f + '"></i></a>'),
        n && (g += '<button class="J-get-real-info btn btn-default btn-xs" data-type="addr">点击查看</button>'),
        g += "</div>"),
        g
    }
});
define("module/order/order_change_address", ["module/interface", "module/order/order_list_dom_phone"], function(e, d) {
    function r(r) {
        var s = $(".J-order")
          , a = [];
        s.each(function(e, d) {
            a.push($(d).attr("data-view-id"))
        }),
        $.ajax({
            url: e.order.sc.getChangeAddressInfo,
            data: {
                wmOrderIds: a.join(",")
            },
            success: function(e) {
                if (0 === e.code)
                    for (var s = e.data, a = 0; a < s.length; a++) {
                        var n = s[a]
                          , o = n.orderViewId
                          , i = n.auditStatus
                          , c = $("#" + o);
                        if (0 === i) {
                            r[o] && r[o][0] && 1 === r[o][0].status && 0 === r[o][0].part_refund ? c.find(".J-change-address-refund-warn").show() : (c.find(".J-change-address-warn").show(),
                            c.find(".J-change-address-title").show(),
                            c.find(".J-agree-change-address").show(),
                            c.find(".J-refuse-change-address").show(),
                            c.find(".J-agree-change-address").click(function(e) {
                                t.wmPoiId = $(e.target).parents(".J-order").data("poiId"),
                                t.orderViewId = $(e.target).parents(".J-order").data("viewId"),
                                t.auditType = 1,
                                t.showChangeAddressAgreeModal = !0
                            }),
                            c.find(".J-refuse-change-address").click(function(e) {
                                t.wmPoiId = $(e.target).parents(".J-order").data("poiId"),
                                t.orderViewId = $(e.target).parents(".J-order").data("viewId"),
                                t.auditType = 2,
                                t.rejectReason = "",
                                t.showChangeAddressAgreeModal = !0
                            })),
                            c.find(".J-user-nick-name-changed").text(n.newAddress.recipient_name),
                            c.find(".J-user-phone-address-changed").html(d(n.newAddress, !0)),
                            c.find(".J-changed-client-info").show();
                            var h = c.find(".user-name").eq(0);
                            h.css("text-decoration", "line-through"),
                            h.find(".J-start-chat").hide(),
                            c.find(".J-user-phone-address").css("text-decoration", "line-through"),
                            c.find(".J-user-phone-address .phone-title").css("text-decoration", "line-through"),
                            c.find(".J-user-phone-address .j-show-map").css("text-decoration", "line-through"),
                            c.find(".J-send-delivery-myself").hide()
                        }
                    }
            }
        })
    }
    var t = new Vue({
        el: "#b2c-change-address-agree-modal",
        data: function() {
            return {
                showChangeAddressAgreeModal: !1,
                wmPoiId: "",
                orderViewId: "",
                auditType: 1,
                rejectReason: ""
            }
        },
        methods: {
            handleSubmitReply: function() {
                var d = this;
                return 2 === d.auditType && d.rejectReason.trim().length < 5 ? d.$toast.error("请至少输入5个字哦") : void $.ajax({
                    url: e.order.sc.submitChangeAddressReply,
                    type: "post",
                    data: {
                        wmPoiId: this.wmPoiId,
                        orderViewId: this.orderViewId,
                        auditType: this.auditType,
                        rejectReason: this.rejectReason.trim()
                    },
                    success: function(e) {
                        0 === e.code ? (d.showChangeAddressAgreeModal = !1,
                        d.$toast.success("审核成功"),
                        setTimeout(function() {
                            window.top.location.reload()
                        }, 1e3)) : 2 === e.code ? (d.$toast.error(e.msg),
                        setTimeout(function() {
                            window.top.location.reload()
                        }, 3e3)) : d.$toast.error(e.msg)
                    },
                    error: function() {
                        d.$toast.error("审核失败，请重试")
                    }
                })
            },
            handleClose: function() {
                this.showChangeAddressAgreeModal = !1
            }
        }
    });
    return {
        init: r
    }
});
define("module/order/order_refund_clothes_init", ["widgets/lazyload", "module/cookie", "module/interface", "widgets/normal_dialog", "widgets/check_bigPic", "util/scroll_ev", "util/utils", "module/order/order_change_address"], function(e, a, s, n, r, t, o, d) {
    function i(e) {
        for (var a = JSON.parse(sessionStorage.getItem("warehouseList")), s = {}, n = 0; n < a.length; n++) {
            var r = a[n];
            s[r.id] = r.name
        }
        console.log("warehouseMap", s);
        var t = e.otherSRA;
        t.unshift(e.sellerReceiveAddress),
        console.log("退货地址列表", t);
        var o = e.otherUE || [];
        e.upWsId && o.unshift(_.pick(e, ["upWsId", "expressCompany", "expressNumber"])),
        console.log("退货物流列表", o);
        var d = {};
        t.forEach(function(e) {
            d[e.wsId] = {
                address: e.address,
                phone: e.phone,
                sellerName: e.receiver
            }
        }),
        o.forEach(function(e) {
            _.assign(d[e.upWsId], {
                expressCompany: e.expressCompany,
                expressNumber: e.expressNumber
            })
        }),
        console.log("{ 仓库id: 退货物流 || 退货地址 }", d);
        var i = t.map(function(e) {
            return _.assign(d[e.wsId], {
                warehouseName: s[e.wsId] || "已删除仓库"
            })
        });
        return console.log("[{ 仓库名称, 退货物流 || 退货地址 }]", i),
        i
    }
    function c(e) {
        var a = [];
        return e.address && a.push(e.address),
        e.phone && a.push(e.phone),
        e.sellerName && a.push(e.sellerName),
        a.join(" ") + " （收）"
    }
    function l(e, a) {
        for (var s = '<div class="color-999 font-12">退货地址：</div>', n = s, r = "", t = 0; t < e.length; t++) {
            warehouseNameHTML = '<div class="color-999 font-12">' + e[t].warehouseName + "</div>",
            s += warehouseNameHTML,
            n += warehouseNameHTML,
            r += warehouseNameHTML;
            var o = '<div class="color-999 font-12">' + c(e[t]) + "</div>";
            if (n += o,
            e[t].expressNumber) {
                var d = '<div class="color-999 font-12">快递公司：' + e[t].expressCompany + '</div><div class="color-999 font-12">快递单号：' + e[t].expressNumber + '</div><a class="J-check-express" href="javascript:;;" data-element-id="ShangouOrderRefundLogistics">查看物流</a>';
                s += d,
                r += d
            } else
                s += o
        }
        return [s, n, r]
    }
    var p = function(e) {
        return 2 === +e
    }
      , u = function(e) {
        for (var a = 0; a < e.length; a++) {
            var s = e[a];
            if (1 !== +s.isPay)
                return {
                    item: s,
                    index: a
                }
        }
    }
      , f = function(e, a, s) {
        a && e.find(".order-time").html('<span class="color-main font-16">' + a + "</span>"),
        s && e.find(".order-state").html(s)
    }
      , v = function(e) {
        switch (e) {
        case 1:
            return "接单1分钟内，退款申请系统自动通过";
        case 30:
            return "商家超时未处理，退款申请系统自动通过";
        case 803:
            return "客服超时未处理，退款申请系统自动通过";
        case 805:
            return "商家开通极速退款服务，退款申请系统自动通过";
        case 910:
            return "订单取消自动确认退款";
        case 911:
        case 914:
            return "已为顾客退款，但订单正常结算";
        case 912:
            return "已为顾客退款，骑手承担责任，订单正常结算";
        case 913:
            return "已为顾客退款，业务经理承担责任，订单正常结算";
        default:
            return "该笔钱会自动退回给顾客"
        }
    }
      , m = function(e, a, s, n, r, t, o) {
        var d = ""
          , i = ""
          , c = ""
          , l = ""
          , p = ""
          , u = 1 === +s ? "部分" : "全部";
        switch (e) {
        case 1:
            n ? (d = "顾客申请" + u + "退货",
            l = "待商家审核",
            p = "订单售后中") : 101 === a ? (1 === +t && (u = 1 === +s ? "分期" : "整单"),
            d = "顾客申请" + u + "退款") : 201 === a ? d = "商家发起" + u + "退款" : 301 === a ? d = "客服发起" + u + "退款" : 501 === a ? d = "订单取消自动确认退款" : 502 === a ? d = "重复提交而自动退款" : 503 === a ? d = "支付成功消息在订单取消之后到达而自动申请" : 504 === a && (d = "支付成功消息在订单被置为无效之后到达而自动申请");
            break;
        case 10:
            var f = "待顾客提交物流单号";
            1 === o ? f = "待顾客送货" : 2 === o && (f = "待商家取货"),
            201 == a ? (i = "商家通过" + u + "退货申请，" + f,
            c = o ? "请确认货品是否完好，无问题请点击确认收货并退款。" : "") : 505 == a && (i = "系统自动进入退货流程，" + f,
            c = o ? "请确认货品是否完好，无问题请点击确认收货并退款。" : "商家超时未处理售后退货"),
            l = f,
            p = "订单售后中";
            break;
        case 11:
            201 == a && (i = "商家驳回" + u + "退货申请",
            l = "商家拒绝退货",
            p = "售后关闭");
            break;
        case 20:
            if (n) {
                var f = "顾客提交退货物流单号";
                1 === o ? f = "顾客送货" : 2 === o && (f = "商家取货"),
                d = f,
                l = "待商家确认退款",
                p = "订单售后中"
            }
            break;
        case 21:
            n && (551 === a ? (l = "退货退款成功",
            p = "售后成功") : (l = "商家同意退款",
            p = "订单售后中")),
            201 === a ? i = o ? "商家已收货" : "商家通过" + u + "退款申请" : 551 === a ? i = "退款完成" : 552 === a ? i = "退款失败，请联系美团客服处理" : (i = "系统自动退款",
            c = "商家超时未处理退款");
            break;
        case 22:
            n && (l = "商家拒绝退款",
            p = "售后关闭"),
            i = "商家驳回" + u + "退款申请";
            break;
        case 26:
            d = "顾客申请客服介入";
            break;
        case 27:
            c = v(r),
            i = 301 == a ? "客服同意" + u + "退款" : "系统自动退款";
            break;
        case 28:
            i = "客服拒绝" + u + "退款";
            break;
        case 30:
            if (n) {
                var f = "顾客超时未提交物流单号";
                1 === o ? f = "顾客超时未送货" : 2 === o && (f = "商家超时未取货"),
                101 === a ? (d = "顾客取消" + u + "退货",
                c = "退货流程已取消") : 505 === a && (d = f + "，退货流程取消"),
                l = "退货申请关闭",
                p = "售后关闭"
            } else
                c = "顾客取消了退款",
                101 == a ? d = "顾客取消" + u + "退款申请" : 550 === a && (d = "顾客取消" + u + "退款申诉")
        }
        return {
            applyDes: d,
            resDes: i,
            refundText: c,
            title: l,
            subtitle: p
        }
    }
      , b = []
      , h = {
        initRefundDOM: function(n, r) {
            var c = [];
            n.each(function(e, a) {
                var s = {};
                s.wmOrderViewId = $(a).attr("data-view-id"),
                s.wmPoiId = $(a).data("poiId"),
                c.push(s),
                $(a).find(".refund-info").addClass("refund-clothes-info")
            }),
            $.ajax({
                url: s.order.sc.getRefundInfo,
                data: {
                    orderInfos: JSON.stringify(c)
                },
                success: function(s) {
                    if (0 == s.code) {
                        var n = s.tip
                          , c = s.refund_g_ability || {}
                          , s = s.data;
                        b = s,
                        ("change_address" === r.page || "history" === r.page) && d.init(b);
                        for (var v in s) {
                            var h = $("#" + v)
                              , g = h.data("isCycleOrder");
                            if (s[v].length > 0) {
                                var w = s[v][0]
                                  , y = w.service_type
                                  , _ = p(y)
                                  , x = _ ? "退货" : "退款";
                                h.data("serviceType", y);
                                var I = '<p><strong class="color-333 font-16">' + x + '信息</strong><a href="javascript:;" class="pull-right font-12 drop-text J-display-more"> <i class="fa fa-angle-up drop-arrow"></i></a></p>';
                                w.returnWay && (I += '<div class="return-goods color-999 font-12"><div>退货方式： ' + (1 === w.returnWay ? "顾客自己送回" : "商家取货") + "</div>",
                                I += w.returnTime ? "<div>退货时间： 同意退款后的" + w.returnTime + "</div>" : "",
                                w.returnPhone && 2 === w.returnWay && (I += "<div>顾客电话： " + w.returnPhone + " " + w.returnName + "</div>"),
                                w.returnAddress && 2 === w.returnWay && (I += "<div>顾客地址： " + w.returnAddress + "</div>")),
                                arrList = s[v];
                                var k = u(arrList)
                                  , J = k.item
                                  , j = k.index;
                                if (J) {
                                    var R = m(+J.status, +J.apply_op_scenario, J.part_refund, p(J.service_type));
                                    f(h, R.title, R.subtitle)
                                }
                                arrList.forEach(function(e, a, s) {
                                    if (e.apply_unit_refund_type) {
                                        I += '<div class="refund-step posr" data-id="' + e.id + '"><div class="posr"><span class="circle-dot"></span><span class="b-title">商家发起按重量退差价</span><span class="color-a2 pull-right">' + e.apply_time_fmt + "</span></div>",
                                        e.money && (I += '<div class="color-999"><span>金额：</span><span class="c-red">&yen;' + e.money + "</span></div>");
                                        var r = e.refundFoodItemInfoList;
                                        return r && r.length && (I += '<div class="color-999 clearfix"><span class="pull-left">商品：</span><ul class="refund-product-list pull-left">',
                                        r.forEach(function(e) {
                                            I += '<li><span class="l no-wrap">' + e.food_name + "</span></li>"
                                        }),
                                        I += "</ul></div>"),
                                        I += '<div class="color-999"><span>理由：</span><span>' + (e.apply_reason || "") + "</span></div>",
                                        void (I += '<div class="color-999 cursor J-weight-refund-detail"><span>退差价详情 <i class="fa fa-question-circle font-14 inline-middle"></i></span></div></div>')
                                    }
                                    var t = e.part_refund
                                      , o = 1 === t ? "部分" : "全部"
                                      , d = +e.status
                                      , c = 1 === +e.isPay
                                      , u = +e.apply_op_scenario
                                      , f = e.refund_marking
                                      , v = e.common_ext || {}
                                      , b = ""
                                      , w = +e.service_type
                                      , y = e.recordViewId
                                      , _ = e.op_time
                                      , x = e.deployPart
                                      , k = p(w)
                                      , J = ""
                                      , $ = ""
                                      , R = ""
                                      , T = 0 === a ? e.deal_time : 4320
                                      , C = a === arrList.length - 1
                                      , S = a === j
                                      , N = e.returnWay;
                                    if (k)
                                        if (!v.otherSRA || 1 !== d && 10 !== d && 20 !== d) {
                                            if (1 === d || 10 === d) {
                                                var O = v.sellerReceiveAddress;
                                                O && !N && (b = O.warehouseType && 3 === O.warehouseType ? "退货地址：[退回" + O.warehouseRemarkName + "]涉及仓见订单商品信息，仓地址见仓库管理（如无原仓或原仓被删则退货回入驻地址）" : "退货地址：" + (O.warehouseRemarkName ? "[退回" + O.warehouseRemarkName + "] " : "") + (O.address ? O.address : "") + " " + (O.phone ? O.phone : "") + " " + (O.receiver ? O.receiver : "") + "（收）")
                                            }
                                        } else
                                            var L = i(v)
                                              , P = l(L)
                                              , D = P[0]
                                              , E = P[1]
                                              , A = P[2];
                                    805 === f && (o = "极速"),
                                    x || h.find(".J-part-refund").remove();
                                    var M = m(d, u, t, k, f, g, N);
                                    if (J = M.applyDes,
                                    $ = M.resDes,
                                    R = M.refundText,
                                    c && ($ = "商家给顾客转账 &yen; " + v.amount),
                                    $) {
                                        if (I += '<div class="refund-step posr"><div class="posr"><span class="fa fa-dot-circle-o circle-dot2 font-12"></span><span class="b-title">' + $ + '</span><span class="color-999 font-12">（' + _ + "）</span></div>",
                                        11 === d || 22 === d || 28 === d)
                                            I += '<div class="font-12 color-999" style="word-break: break-all">拒绝理由：' + (e.res_reason || "") + "</div>";
                                        else if (!c && (I += '<div class="font-12 color-999">' + R + "</div>",
                                        10 === d && (b ? I += '<div class="font-12 color-999">' + b + "</div>" : D && (I += S ? D : E)),
                                        10 === d && S)) {
                                            var W = "内顾客如未提交物流单号，系统将自动关闭退货申请，不自动退款";
                                            1 === N ? W = "内顾客如未送货，系统自动进入退款流程" : 2 === N && (W = "内商家如未取货，系统自动进入退款流程"),
                                            I += '<div class="font-12 color-999"><div class="posr"><span class="J-cut-down c-red" data-current-time="' + e.current_time + '" data-deadline-time="' + e.process_deadline + '" data-minute="' + T + '"></span> ' + W + "</div></div>",
                                            N && (I += '<button type="button" class="btn btn-primary btn-sm refund-btn J-agree-refund" data-record-view-id="' + y + '">确认收货并退款</button><button type="button" class="btn btn-default btn-sm refund-btn J-reject-refund" data-record-view-id="' + y + '">拒绝退款</button>')
                                        }
                                        I += "</div>"
                                    }
                                    if (J) {
                                        I += '<div class="refund-step posr"><div class="posr"><span class="circle-dot"></span><span class="b-title">' + J + '</span><span class="color-999 font-12">（' + _ + "）</span></div>";
                                        var V = 1 === d && (101 === u || 201 === u || 301 === u || k)
                                          , q = 1 === t && V;
                                        e.money && q && (I += '<div class="inner-box posr font-12"><span class="posa inner-title">退款金额：</span><span class="c-red">&yen;' + e.money + '</span><span class="refund-role color-999" data-toggle="tooltip" data-placement="right" data-original-title="' + n + '"><i class="fa fa-question-circle font-14"></i><span>查看计价规则</span></span></div>',
                                        1 === g && e.mergeCycleIndex && (I += '<div class="inner-box posr font-12"><span class="posa inner-title">退款期数：</span><span>' + e.mergeCycleIndex + "</span></div>"));
                                        var r = e.refundFoodItemInfoList;
                                        r && r.length && q && (I += '<div class="inner-box posr font-12"><span class="posa inner-title">退款商品：</span><ul class="refund-product-list">' + r.map(function(e) {
                                            return '<li><span class="l no-wrap">' + e.food_name + '</span><span class="m no-wrap">x' + e.count + '</span><span class=" no-wrap">&yen;' + e.refund_price + "</span></li>"
                                        }).join("") + "</ul></div>"),
                                        26 === d ? I += '<div class="inner-box posr font-12 color-999"><span class="posa inner-title">客服会在' + (e.dealHour || 48) + "小时内主动介入调解，请耐心等待</span></div>" : V && (I += '<div class="inner-box posr font-12 color-999"><span class="posa inner-title">退款理由：</span><div style="word-break: break-all">' + (e.apply_reason || "") + "</div></div>");
                                        var z = e.pictures;
                                        z && z.length && V && (I += '<div class="inner-box img-box J-img-wrapper" data-loop="false">',
                                        z.forEach(function(e) {
                                            I += '<img data-original="' + e + '" data-src="' + e + '" class="J-img-item">'
                                        }),
                                        I += "</div>"),
                                        1 === d ? k ? (I += '<div class="ope-box font-12"><a class="J-pay-to-user" href="javascript:;;" data-element-id="ShangouOrderRefundPay">付款给顾客</a><span class="color-999">（该功能为即时转账，用于退运费等小额退款，请谨慎操作）</span></div>',
                                        S && (I += '<div class="ope-box posr font-12"><div class="posr"><span class="J-cut-down c-red" data-current-time="' + e.current_time + '" data-deadline-time="' + e.process_deadline + '" data-status="1"></span> 后自动进入退货流程</div>' + (E || '<div class="refund-address color-999">' + b + "</div>") + '<button type="button" class="btn btn-primary btn-sm refund-btn J-agree-refund goods" data-record-view-id="' + y + '">同意退货</button><button type="button" class="btn btn-default btn-sm refund-btn J-reject-refund goods" data-record-view-id="' + y + '">拒绝退货</button></div>')) : S && (I += '<div class="ope-box posr font-12"><div class="posr"><span class="J-cut-down c-red" data-current-time="' + e.current_time + '" data-deadline-time="' + e.process_deadline + '" data-status="2"></span> 后自动退款</div><button type="button" class="btn btn-primary btn-sm refund-btn J-agree-refund" data-record-view-id="' + y + '">同意退款</button><button type="button" class="btn btn-default btn-sm refund-btn J-reject-refund" data-record-view-id="' + y + '">拒绝退款</button></div>') : 20 === d && (k && (I += A || '<div class="font-12"><div class="color-999">快递公司：' + (v.expressCompany || "") + '</div><div class="color-999">快递单号：' + (v.expressNumber || "") + '</div><a class="J-check-express" href="javascript:;;" data-element-id="ShangouOrderRefundLogistics">查看物流</a></div>'),
                                        S && (I += '<div class="ope-box posr font-12"><div class="posr"><span class="J-cut-down c-red" data-current-time="' + e.current_time + '" data-deadline-time="' + e.process_deadline + '" data-status="2"></span> 后自动退款</div><button type="button" class="btn btn-primary btn-sm refund-btn J-agree-refund" data-record-view-id="' + y + '">同意退款</button><button type="button" class="btn btn-default btn-sm refund-btn J-reject-refund" data-record-view-id="' + y + '">拒绝退款</button></div>')),
                                        C && (I += '<div class="inner-box posr font-12"><a href="javascript:;" class="posa inner-title color-999 J-refund-rule"><i class="fa fa-exclamation-circle font-14"></i>退款规则</a></div>'),
                                        S && ((1 === d || 20 === d || 26 === d) && h.find(".refund-info").addClass("bg-highlight"),
                                        30 !== d && (21 !== d || 551 !== u && 552 !== u) && (h.find(".J-cancel-order").hide(),
                                        h.find(".J-part-refund").remove())),
                                        I += "</div>"
                                    }
                                }),
                                h.find(".refund-info").show().html(I),
                                $('[data-toggle="tooltip"]').tooltip(),
                                e($("img"))
                            }
                            c[v] && h.find(".J-weight-refund").show()
                        }
                        var T = a.getCookie("wmPoiId")
                          , C = 0
                          , S = +localStorage.getItem("refundStatus");
                        if (location.href.indexOf("refund/unprocessed") > -1 ? C = 1 : location.href.indexOf("refund/processed") > -1 && (C = 2),
                        C > 0) {
                            var N = $(window)
                              , O = $(".J-pay-to-user, .J-check-express");
                            o.reportLogData("show", {
                                poi_id: T,
                                element_id: "ShangouOrderRefund",
                                refund_status: S + 1,
                                deal_status: C
                            }),
                            setTimeout(function() {
                                t(N, O, function(e) {
                                    var a = e.data("elementId");
                                    o.reportLogData("show", {
                                        poi_id: T,
                                        element_id: a,
                                        refund_status: S + 1,
                                        deal_status: C
                                    })
                                })
                            }, 3e3)
                        }
                    }
                    $(".refund-info .J-cut-down").each(function(e, a) {
                        var s = $(a)
                          , n = +s.data("status")
                          , r = 1 === n ? ".J-goods-order-countdown" : ".J-order-countdown"
                          , t = s.parents(".order").find(r)
                          , d = parseInt(s.data("currentTime") / 1e3)
                          , i = parseInt(s.data("deadlineTime"))
                          , c = i - d;
                        c && (n > 0 && (t.show(),
                        o.countDown({
                            countStyle: !0,
                            time: c,
                            jQelem: t.find(".J-cut-down"),
                            txt: "{time}",
                            needDay: c >= 86400,
                            cb: function() {
                                n > 0 && t.remove()
                            }
                        })),
                        o.countDown({
                            countStyle: !0,
                            time: c,
                            jQelem: s,
                            txt: "{time}",
                            needDay: c >= 86400,
                            cb: function() {
                                s.parent().remove()
                            }
                        }))
                    }),
                    location.href.indexOf("refund/unprocessed") > -1 && $(".J-pagination").hide()
                }
            })
        },
        rejectRefund: function(e, n, r, t, d, i) {
            var c = a.getCookie("token")
              , l = a.getCookie("acctId");
            $.post(t ? s.order.sc.rejectReturn : i ? s.order.sc.rejectRefund : s.order.disagreeRefund, {
                wmPoiId: n,
                token: c,
                acctId: l,
                appType: 3,
                recordViewId: d,
                orderId: e,
                rejectReason: r
            }, function(a) {
                0 == a.code ? (o.showTip("已拒绝" + (t ? "退货" : "退款")),
                parent.RefundOrder.handleRefundApply("-1"),
                location.href.indexOf("v2/order/refund/unprocessed") > -1 ? $("#" + e).remove() : window.location.reload()) : o.showTip(a.msg)
            })
        },
        agreeRefund: function(e, n, r, t, d) {
            var i = a.getCookie("token")
              , c = a.getCookie("acctId");
            $.post(r ? s.order.sc.agreeReturn : d ? s.order.sc.agreeRefund : s.order.agreeRefund, {
                wmPoiId: n,
                token: i,
                acctId: c,
                appType: 3,
                recordViewId: t,
                orderId: e
            }, function(a) {
                0 == a.code ? (r || (o.showTip("订单处理成功！请到“已处理”中查看", "success"),
                parent.RefundOrder.handleRefundApply("-1")),
                location.href.indexOf("v2/order/refund/unprocessed") > -1 ? r ? window.location.reload() : $("#" + e).remove() : window.location.reload()) : o.showTip(a.msg)
            })
        },
        payToUser: function(e, n, r, t, d, i) {
            var c = a.getCookie("token")
              , l = a.getCookie("acctId");
            $.post(s.order.sc.payToUser, {
                wmPoiId: n,
                token: c,
                acctId: l,
                appType: 3,
                orderId: e,
                amount: r,
                userId: t,
                userName: d,
                remark: i
            }, function(e) {
                0 == e.code ? (o.showTip("付款成功！", "success"),
                window.location.reload()) : o.showTip(e.msg)
            })
        },
        bindEvent: function() {
            var e = this;
            $(document).on("click", ".J-reject-refund", function() {
                var a = $(this)
                  , r = a.parents(".order")
                  , t = r.attr("data-view-id")
                  , d = r.data("poiId")
                  , i = a.hasClass("goods")
                  , c = a.data("recordViewId")
                  , l = +r.data("serviceType")
                  , p = i ? "退货" : "退款"
                  , u = "<div>建议您先联系顾客协商处理，拒绝后若顾客申诉通过，可能影响您的排名哦~</div>"
                  , f = n({
                    title: "提示建议",
                    content: u,
                    btns: [{
                        txt: "继续拒绝",
                        fn: function() {
                            var a = r.find(".J-delivery-section")
                              , u = a.data("teamCode")
                              , v = a.data("deliveryStatus");
                            $.ajax({
                                url: s.order.rejectReason,
                                data: {
                                    wmPoiId: d,
                                    orderId: t,
                                    logisticsCode: u,
                                    logisticsStatus: v,
                                    serviceType: l,
                                    reasonType: i ? 1 : 0
                                },
                                success: function(a) {
                                    if (0 == a.code) {
                                        f.modal("hide");
                                        var s = a.data
                                          , r = s.rejectReasonTips
                                          , u = s.rejectReasonList || []
                                          , v = "其他";
                                        u.length || (u = ["已和顾客沟通一致不退款", "正在配送途中,请耐心等待", "顾客已收货"]);
                                        var m = u.map(function(e) {
                                            return '<label class="label-radio"><input type="radio" name="reject-reason" value="' + e + '"/><span class="custom-radio"></span> ' + e + "</label>"
                                        }).join("")
                                          , b = '<div class="alert alert-dismissible" role="alert">' + r + '</div><div class="radio reject-reason-select">' + m + '<label class="label-radio"><input type="radio" name="reject-reason" value="' + v + '"/><span class="custom-radio"></span> ' + v + '</label><div style="margin-left: 20px"><textarea placeholder="请输入其他拒绝理由" class="form-control other-reject-reason" disabled="disabled"></textarea></div></div>'
                                          , h = n({
                                            title: "选择拒绝" + p + "理由",
                                            content: b,
                                            btns: [{
                                                txt: "提交",
                                                fn: function() {
                                                    var a = $('input[name="reject-reason"]:checked').val() || "";
                                                    return a == v && (a = g.val()),
                                                    a ? (e.rejectRefund(t, d, a, i, c, l > 0),
                                                    void h.modal("hide")) : o.showTip("拒绝理由不能为空!")
                                                }
                                            }]
                                        })
                                          , g = $(".other-reject-reason");
                                        $(".other-reject-reason").wordcount({
                                            limit: 200
                                        }),
                                        $(document).on("click", 'input[name="reject-reason"]', function() {
                                            var e = $(this).val();
                                            e == v ? g.prop("disabled", !1) : (g.val("").trigger("change"),
                                            g.prop("disabled", !0))
                                        })
                                    }
                                }
                            })
                        }
                    }, {
                        txt: "取消"
                    }]
                })
            }),
            $(document).on("click", ".J-check-express", function() {
                var e = $(this)
                  , a = e.parents(".order")
                  , s = a.data("poiId")
                  , n = 0
                  , r = +localStorage.getItem("refundStatus");
                location.href.indexOf("refund/unprocessed") > -1 ? n = 1 : location.href.indexOf("refund/processed") > -1 && (n = 2),
                n > 0 && o.reportLogData("click", {
                    poi_id: s,
                    element_id: "ShangouOrderRefundLogistics",
                    refund_status: r + 1,
                    deal_status: n
                }),
                window.open("//www.kuaidi100.com/")
            }),
            $(document).on("click", ".J-agree-refund", function() {
                var a = $(this)
                  , s = a.parents(".order")
                  , r = s.attr("data-view-id")
                  , t = s.data("poiId")
                  , d = a.hasClass("goods")
                  , i = a.data("recordViewId")
                  , c = +s.data("serviceType")
                  , l = d ? "退货" : "退款"
                  , p = "<div>确认同意" + l + "吗</div>"
                  , u = n({
                    title: "再次确认",
                    content: p,
                    btns: [{
                        txt: "同意" + l,
                        fn: function() {
                            e.agreeRefund(r, t, d, i, c > 0),
                            u.modal("hide")
                        }
                    }, {
                        txt: "取消"
                    }]
                })
                  , f = o.url2Cid();
                f && o.reportMC("b_shangou_online_e_tqssqd4b_mc", f, null, null, {
                    order_id: r
                })
            }),
            $(document).on("click", ".J-pay-to-user", function() {
                var a = $(this).parents(".order")
                  , s = a.attr("data-view-id")
                  , r = a.data("poiId")
                  , t = a.data("userId")
                  , d = a.data("recipientName") || "美团客人"
                  , i = 0
                  , c = +localStorage.getItem("refundStatus");
                location.href.indexOf("refund/unprocessed") > -1 ? i = 1 : location.href.indexOf("refund/processed") > -1 && (i = 2),
                i > 0 && o.reportLogData("click", {
                    poi_id: r,
                    element_id: "ShangouOrderRefundPay",
                    refund_status: c + 1,
                    deal_status: i
                });
                var l = '<form class="form-horizontal J-pay-to-user-form"><div class="form-group"><label class="control-label col-sm-3">收款人</label><div class="col-sm-6" style="padding-top: 7px">' + d + '</div></div><div class="form-group"><label class="control-label col-sm-3 required">付款金额(¥)</label><div class="col-sm-6"><input type="number" placeholder="最大金额为100" class="form-control rmb"></div><div class="col-sm-3 error-message"></div></div><div class="form-group"><label class="control-label col-sm-3">转款说明</label><div class="col-sm-6"><textarea class="form-control remark"></textarea></div></div></form>';
                l += '<div class="exclamation"><i class="fa fa-exclamation"></i> 该功能为即时转账，用于退运费等小额退款，请谨慎操作</div>';
                var p = (n({
                    title: "付款给顾客",
                    size: "md",
                    content: l,
                    btns: [{
                        txt: "确认",
                        fn: function() {
                            var a = $(".J-pay-to-user-form .rmb")
                              , n = a.val()
                              , o = a.parent().next(".error-message")
                              , i = "";
                            return "" === n ? i = "付款金额不能为空" : 0 >= n ? i = "金额不能为0" : n > 100 && (i = "最大金额为100"),
                            i ? (a.addClass("error").focus(),
                            void o.text(i)) : (a.removeClass("error"),
                            o.text(""),
                            n = Math.floor(100 * n) / 100,
                            void e.payToUser(s, r, n, t, d, p.val()))
                        }
                    }]
                }),
                $(".J-pay-to-user-form .remark"));
                p.wordcount({
                    limit: 120
                })
            }),
            $(document).on("click", ".J-refund-rule", function() {
                var e = "<h4>如遇以下情况，建议商家退款给顾客：</h4><p>&nbsp;&nbsp;1. 顾客收到商品，但商品质量有问题、少送、送错，商家包装导致撒漏，商家应退款给顾客</p><p>&nbsp;&nbsp;2. 商家无法配送，需联系顾客并为顾客退款</p><p>&nbsp;&nbsp;3. 骑手告知顾客无法配送，顾客申请退款，商家可联系骑手确认，并可先退款，再申请货损</p><p>&nbsp;&nbsp;4. 配送原因商品丢失，顾客申请退款，商家可联系骑手确认，并可先退款，再申请货损</p><p>&nbsp;&nbsp;5. 骑手送错地址，顾客申请退款，商家可联系骑手确认，并可先退款，再申请货损</p><hr><h4>如遇以下情况，系统会优先退款给顾客：</h4><p>&nbsp;&nbsp;1. 商家接单后1分钟内且骑手未取货前，顾客申请退款，系统优先退款</p><p>&nbsp;&nbsp;2. 美团专送商家，超过建议送达时间30分钟顾客仍未收到货，顾客申请退款，系统优先退款，如是配送责任商家可以申请货损，如是商家责任则由商家承担</p><p>&nbsp;&nbsp;3. 开通极速退款服务的商家，顾客申请极速退款，系统优先退款，如是配送责任商家可以申请货损，如是商家责任则由商家承担</p><hr><h4>如遇以下情况，商家可视自身情况决定是否退款给顾客：</h4><p>&nbsp;&nbsp;顾客自身原因申请退款，自身原因如：</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. 临时有事，不想要了</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. 地址、电话写错了</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. 买错了，买多了</p><hr><h4>如遇以下情况，建议商家同意退货给顾客：</h4><p>&nbsp;&nbsp;顾客收到商品，非骑手原因导致商品出现质量问题</p><p>&nbsp;&nbsp;符合7天无理由退货的商品</p><p>&nbsp;&nbsp;由于商家原因导致的商品错发</p><hr><h4>退货运费说明：</h4><p>&nbsp;&nbsp;如退货需要顾客物流寄回商品，顾客主观原因导致的退货，请与顾客协商退货运费</p><p>&nbsp;&nbsp;如商家导致的退货，建议商家承担返程退货运费</p>"
                  , a = n({
                    title: "退款规则",
                    content: e,
                    btns: [{
                        txt: "知道了",
                        fn: function() {
                            a.modal("hide")
                        }
                    }],
                    size: "md"
                })
            }),
            $(document).on("click", ".J-weight-refund-detail", function() {
                var e = $(this).closest(".order-list-item")
                  , a = e.attr("data-view-id")
                  , r = $(this).closest(".refund-step").data("id")
                  , t = b[a].find(function(e) {
                    return e.id === r
                })
                  , o = {}
                  , d = {};
                $.ajax({
                    type: "GET",
                    url: s.order.sc.getRefundPic,
                    data: {
                        wmPoiId: e.data("poiId"),
                        foodIds: t.refundFoodItemInfoList.map(function(e) {
                            return e.wm_food_id
                        }).join(",")
                    },
                    success: function(e) {
                        0 === e.code && (e.data && e.data.forEach(function(e) {
                            d[e.foodId] = e.pic
                        }),
                        i())
                    }
                });
                var i = function() {
                    t.refundFoodItemInfoList.forEach(function(e, a) {
                        var s = e.detail_id
                          , n = "/static/62416314/imgs/orderImg.webp";
                        d[e.wm_food_id] && (n = d[e.wm_food_id] || n),
                        o[s] || (o[s] = {
                            common: '<img class="mt5 pull-left" src="' + n + '" width=50 height=50><div><span class="dpib">' + e.food_name + '</span><br><span class="dpib c-red">￥' + e.food_price + '</span><br><span class="weight-refund-item-tip dpib">申请退差价$count份，最多退￥$price</span></div>',
                            html: [],
                            activityPriceSum: 0
                        }),
                        o[s].html.push('<div class="mt10 item posr"><span class="index-num dpib pull-left">' + (o[s].html.length + 1) + '</span><span class="col-sm-6">退款重量：' + e.refund_unit_count + 'g</span><span class="split inline-middle posa"></span><span class="ml10">已退差价：</span><span class="c-red">￥' + e.refund_price + "</span></div>"),
                        o[s].activityPriceSum += 100 * e.activity_price
                    });
                    var e = '<p class="weight-refund-desc">计算规则：按照商品各类营销活动计算后的实付金额，计算需退重量占整体重量的金额比例。（举例：商品原价10元，设置单品折扣后实付价8元，应拣重量500g，实拣重量400g，则最终退差价(500-400)/500*8=1.6元）。</p>'
                      , a = '<ul class="weight-refund-detail">';
                    for (var s in o) {
                        var r = o[s];
                        r.common = r.common.replace("$count", r.html.length).replace("$price", r.activityPriceSum / 100),
                        a += "<li>" + r.common + r.html.join("") + "</li>"
                    }
                    a += "</ul>";
                    var i = n({
                        title: "",
                        content: e + a,
                        btns: [{
                            txt: "关闭",
                            fn: function() {
                                i.modal("hide")
                            }
                        }],
                        size: "md"
                    });
                    i.find(".modal-title").html('共退差价 <span class="c-red font-14">￥</span><span class="c-red">' + t.money + "</span>")
                }
            })
        }
    };
    return h.bindEvent(),
    h
});
define("module/order/order_refund_part", ["module/cookie", "module/interface", "widgets/normal_dialog", "util/utils"], function(e, t, a, i) {
    var o = []
      , n = ""
      , s = {
        showRefundPartDialog: function(e) {
            var o = $(e.target)
              , n = o.parents(".order")
              , d = n.attr("data-view-id")
              , l = n.data("poiId");
            $.ajax({
                type: "GET",
                url: t.order.getPartRefundFoodInfo,
                data: {
                    wmPoiId: l,
                    wmOrderViewId: d
                },
                dataType: "JSON",
                success: function(e) {
                    if (0 === e.code) {
                        var t = e.data
                          , o = t.foodInfos;
                        if (0 === t.marking && o.length) {
                            var n = '<div class="part-refund"><h4>选择退款商品</h4><ul class="part-refund-list">';
                            o.forEach(function(e, t) {
                                if (n += '<li class="item J-item clearfix" data-item-id="' + e.itemId + '" data-wm-food-id="' + e.wmFoodId + '"><label class="label-checkbox inline pull-left"><input type="checkbox" class="J-checkbox" data-view-id="' + d + '" data-poi-id="' + l + '"><span class="custom-checkbox"></span></label><img src="' + (e.imageUrl ? e.imageUrl : "/static/62416314/imgs/orderImg.webp") + '" alt="商品图片" class="pull-left"><div class="pull-left food-name" title="' + e.foodName + '">',
                                e.originFoodPrice !== e.foodPrice && (n += '<span class="font-12">折</span>'),
                                n += e.foodName + '</div><div class="pull-left food-num color-999">x' + e.count + '</div><div class="pull-left food-price">￥' + e.refundPrice + '</div><div class="pull-right food-refund-num J-food-refund-num posr"><span class="num-sub color-666 posa font-18 disabled J-num-ope J-num-sub">-</span><input type="text" value="1" class="num J-num form-control" data-max="' + e.count + '">',
                                n += 1 === e.count ? '<span class="num-add color-666 posa disabled" data-max="' + e.count + '">+</span>' : '<span class="num-add color-666 posa J-num-ope J-num-add" data-max="' + e.count + '">+</span>',
                                n += "</div>",
                                e.unitRefundItemRecord && e.unitRefundItemRecord.length > 0) {
                                    var a = 0
                                      , i = "<div class='tal xxx'><div class='font-14' style='margin-bottom: 15px'>共退差价 <span class='c-red'>$sum</span></div><div class='mb5'>" + e.foodName + "</div>";
                                    e.unitRefundItemRecord.forEach(function(e, t) {
                                        a += e.refunded_money,
                                        i += "<div class='no-wrap'><span class='dpib' style='width: 20px'>" + (t + 1) + ".</span>退款重量 " + e.refunded_count + "g；已退差价 " + e.refunded_money + "</div>"
                                    }),
                                    a = a.toFixed(2),
                                    i += "</div>",
                                    i = i.replace("$sum", "￥" + a),
                                    n += '<div class="other-info other-info-weight-refund font-12 color-999 clearfix" style="margin: 60px 0 0"><span class="pull-left">已退差价：￥' + a + '</span><span class="pull-right">退差价详情 <i class="fa fa-question-circle font-14 inline-middle cursor" data-toggle="tooltip" data-placement="bottom" data-html="true" title="' + i + '"></i></span></div>'
                                }
                                n += "</li>"
                            }),
                            n += "</ul>";
                            var r = "food" == CommConstants.shopCate ? "餐" : "货";
                            n += '<div class="part-refund-sum"><div>退款金额<span class="color-666 font-12 J-box-fee" style="display: none">（已包含打包费）</span>：<span class="font-18 total">￥<b class="J-total">0</b></span></div><div class="color-999 font-12">退款规则：单独商品的退款金额是在刨除配送费后按照优惠活动等比计算得出</div></div><h4>选择退款理由</h4><div class="part-refund-reason posr"><select name="" class="form-control J-part-refund-reason"><option>店铺太忙</option><option>部分商品已售完</option><option>地址无法配送</option><option>店铺已打烊</option><option>联系不上顾客</option><option>重复订单</option><option>骑手取' + r + "慢</option><option>骑手送" + r + "慢</option><option>骑手丢" + r + "、少" + r + ("food" == CommConstants.shopCate ? "、餐洒" : "") + '</option><option value="">其它</option></select><textarea class="form-control J-part-refund-reason2 posa hide" placeholder="请输入退款理由"></textarea></div></div>';
                            var c = a({
                                title: "部分退款",
                                content: n,
                                btns: [{
                                    txt: "确认",
                                    fn: function() {
                                        var e = c.find(".J-checkbox:checked").length
                                          , t = c.find(".J-part-refund-reason").val();
                                        t || (t = c.find(".J-part-refund-reason2").val()),
                                        e ? t ? s._applyPartRefund(l, d, t) : i.showTip("请输入退款理由") : i.showTip("请至少选择一个需要退款的商品")
                                    }
                                }, {
                                    txt: "取消"
                                }],
                                size: "md"
                            });
                            c.find("[data-toggle=tooltip]").tooltip({
                                container: "body"
                            })
                        } else
                            s.handleTip(t.marking)
                    } else
                        i.showTip(e.msg)
                }
            });
            var r = i.url2Cid();
            r && i.reportMC("b_shangou_online_e_s3cyz8vo_mc", r, null, null, {
                order_id: d
            })
        },
        showRefundWeightDialog: function(e) {
            var o = $(e.target)
              , n = o.parents(".order")
              , d = n.attr("data-view-id")
              , l = n.data("poiId");
            $.ajax({
                type: "GET",
                url: t.order.sc.getWeightRefundFoodInfo,
                data: {
                    wmPoiId: l,
                    wmOrderViewId: d
                },
                dataType: "JSON",
                success: function(e) {
                    if (0 === e.code) {
                        var o = e.data
                          , n = o.foodInfos;
                        if (0 === o.marking && n.length) {
                            var r = ["选择退差价的商品", "调整实拣重量", "共退差价"]
                              , c = 0
                              , u = '<div class="weight-refund">'
                              , p = '<ul class="part-refund-list J-weight-refund-step" style="display:none">';
                            u += '<ul class="part-refund-list J-weight-refund-step">',
                            n.forEach(function(e, t) {
                                var a = e.unitRefundItemRecord || []
                                  , i = e.count <= a.length;
                                u += '<li class="item J-weight-item-1 clearfix" data-item-id="' + e.itemId + '" data-wm-food-id="' + e.wmFoodId + '"><label class="label-checkbox inline pull-left"><input type="checkbox" class="J-weight-checkbox"' + (i ? " disabled" : "") + '><span class="custom-checkbox"></span></label><img src="' + (e.imageUrl ? e.imageUrl : "/static/62416314/imgs/orderImg.webp") + '" alt="商品图片" class="pull-left"><div class="pull-left"><div class="food-name" title="' + e.foodName + '">',
                                e.originFoodPrice !== e.foodPrice && (u += '<span class="font-12">折</span>'),
                                u += e.foodName + '</div><div class="refund-tip">最多退商品实付价¥' + e.totalActivityPrice + '</div></div><div class="pull-right food-price c-red">￥' + e.refundPrice + '</div><div class="pull-right food-num color-999">x' + e.count + "</div>";
                                var o = 0
                                  , n = "<div class='tal'><div class='font-14' style='margin-bottom: 15px'>共退差价 <span class='c-red sum'>$sum</span></div><div class='mb5'>" + e.foodName + "</div>"
                                  , s = e.imageUrl ? e.imageUrl : "/static/62416314/imgs/orderImg.webp";
                                p += '<li class="item J-weight-item-2 clearfix" data-item-id="' + e.itemId + '" data-wm-food-id="' + e.wmFoodId + '" data-food-name="' + e.foodName + '" data-unit-count="' + e.count + '" data-food-price="' + e.foodPrice + '" data-image-url="' + s + '" style="display:none"><img src="' + s + '" alt="商品图片" class="mt5 pull-left"><div><span class="dpib">' + e.foodName + '</span><br><span class="mr10 dpib color-999">x' + e.count + '</span><span class="c-red">￥' + e.foodPrice + '</span><br><span class="refund-tip">最多退商品实付价¥' + e.totalActivityPrice + "</span></div>",
                                p += '<div class="mt10 form-inline">';
                                var d = 0;
                                a.forEach(function(e, t) {
                                    o += e.refunded_money,
                                    d++,
                                    n += "<div class='no-wrap'><span class='dpib' style='width: 20px'>" + (t + 1) + ".</span>退款重量 " + e.refunded_count + "g；需退差价 " + e.refunded_money + "</div>",
                                    p += '<div class="clearfix item posr"><span class="index-num dpib pull-left">' + d + '</span><div class="no-wrap col-sm-6">已退重量：' + e.refunded_count + 'g</div><span class="split inline-middle posa"></span><div class="no-wrap pull-right ml10" style="width: 200px">已退差价：￥' + e.refunded_money + "</div></div>"
                                }),
                                o = o.toFixed(2),
                                n = n.replace("$sum", "￥" + o);
                                for (var l = d; l < e.count; l++)
                                    d++,
                                    p += '<div class="clearfix item posr"><span class="index-num dpib pull-left">' + d + '</span><div class="no-wrap col-sm-6">应拣重量：' + e.unitCount + 'g</div><span class="split inline-middle posa"></span><div class="no-wrap pull-right form-group ml10" style="width: 200px">实拣重量：<div class="input-group"><input class="form-control J-weight-input" type="number" data-unit-count="' + e.unitCount + '"><div class="input-group-addon">g</div></div><p class="help-block tar">实拣重量要大于0，小于应拣重量</p></div></div>';
                                n += "</div>",
                                a.length > 0 && (u += '<div class="other-info other-info-weight-refund font-12 color-999 clearfix" style="margin: 60px 0 0"><span class="pull-left">已退差价：￥' + o + '</span><span class="pull-right">退差价详情 <i class="fa fa-question-circle font-14 inline-middle cursor" data-toggle="tooltip" data-placement="bottom" data-html="true" title="' + n + '"></i></span></div>'),
                                u += "</li>",
                                p += "</div></li>"
                            }),
                            u += "</ul>",
                            p += "</ul>",
                            u += p,
                            u += '<div class="J-weight-refund-step J-weight-refund-step-3" style="display:none"></div></div>';
                            var f = function(e) {
                                e = e || {},
                                J.html(e.title || r[c]),
                                b.text(2 === c ? "退差价" : "下一步"),
                                x.text(0 === c ? "取消" : "上一步"),
                                y.hide(),
                                $(y[c]).show()
                            }
                              , m = function() {
                                if (0 === c && 0 === $(".J-weight-checkbox:checked").length)
                                    return void i.showTip("请至少选择一个退差价的商品");
                                if (1 === c) {
                                    if (g.find(".has-error").length > 0)
                                        return;
                                    var e = g.find(".J-weight-input").splice(0).filter(function(e) {
                                        return e.value.length > 0
                                    });
                                    if (0 === e.length)
                                        return void i.showTip("请至少填写一个实拣重量")
                                }
                                1 === c ? (w = e.map(function(e) {
                                    var t = $(e)
                                      , a = t.closest(".J-weight-item-2")
                                      , i = a.data("item-id")
                                      , o = parseFloat(t.data("unit-count"))
                                      , n = (o - e.value).toFixed(1);
                                    return {
                                        itemId: i,
                                        wmFoodId: a.data("wm-food-id"),
                                        refundUnitCount: n
                                    }
                                }),
                                h()) : 2 == c ? v() : (c++,
                                f())
                            }
                              , h = function() {
                                $.ajax({
                                    type: "POST",
                                    url: t.order.sc.calWeightRefundPrice,
                                    data: {
                                        wmPoiId: l,
                                        wmOrderViewId: d,
                                        productInfo: JSON.stringify(w)
                                    },
                                    success: function(e) {
                                        if (0 === e.code) {
                                            c++;
                                            var t = e.data;
                                            f({
                                                title: r[c] + ' <span class="c-red font-14">￥</span><span class="c-red">' + t.refundMoney + "</span>"
                                            });
                                            var a = t.unitRefundDetails.map(function(e) {
                                                var t = g.find(".J-weight-item-2[data-item-id=" + e.itemId + "][data-wm-food-id=" + e.wmFoodId + "]");
                                                return {
                                                    common: '<img class="mt5 pull-left" src="' + t.data("image-url") + '" width=50 height=50><div><span class="dpib">' + t.data("food-name") + '</span><br><span class="dpib color-999">x' + t.data("unit-count") + ' <span class="c-red">￥' + t.data("food-price") + '</span></span><br><span class="weight-refund-item-tip dpib">申请退差价' + e.refundUnitInfos.length + "份，最多退￥" + e.totalActivityPrice + "</span></div>",
                                                    html: e.refundUnitInfos.map(function(e, t) {
                                                        return '<div class="mt10 item clearfix"><span class="index-num dpib pull-left">' + (t + 1) + '</span><span class="col-sm-6">需退重量：' + e.refundCount + 'g</span><span class="split inline-middle posa"></span><span class="ml10">需退差价：</span><span class="c-red">￥' + e.refundMoney + "</span></div>"
                                                    })
                                                }
                                            })
                                              , o = '<p class="weight-refund-desc">计算规则：按照商品各类营销活动计算后的实付金额，计算需退重量占整体重量的金额比例。（举例：商品原价10元，设置单品折扣后实付价8元，应拣重量500g，实拣重量400g，则最终退差价(500-400)/500*8=1.6元）。</p>'
                                              , n = o + '<ul class="weight-refund-detail">';
                                            for (var s in a) {
                                                var d = a[s];
                                                n += "<li>" + d.common + d.html.join("") + "</li>"
                                            }
                                            n += "</ul>",
                                            g.find(".J-weight-refund-step-3").html(n)
                                        } else
                                            i.showTip(e.msg)
                                    }
                                })
                            }
                              , v = function() {
                                $.ajax({
                                    type: "POST",
                                    url: t.order.sc.applyWeightRefund,
                                    data: {
                                        wmPoiId: l,
                                        wmOrderViewId: d,
                                        productInfo: JSON.stringify(w)
                                    },
                                    success: function(e) {
                                        0 === e.code ? (g.modal("hide"),
                                        location.reload()) : i.showTip(e.msg)
                                    }
                                })
                            }
                              , g = a({
                                title: r[0],
                                content: u,
                                btns: [],
                                size: "md"
                            });
                            g.find("[data-toggle=tooltip]").tooltip({
                                container: "body"
                            }),
                            g.find(".modal-footer").html('<button type="button" class="btn btn-primary J-custom-confirm">下一步</button><button type="button" class="btn btn-default J-custom-cancel">取消</button>');
                            var w, b = g.find(".J-custom-confirm"), x = g.find(".J-custom-cancel"), J = g.find(".modal-title"), y = g.find(".J-weight-refund-step");
                            b.on("click", m),
                            x.on("click", function() {
                                return 0 === c ? void g.modal("hide") : (c--,
                                void f())
                            })
                        } else
                            s.handleTip(o.marking)
                    } else
                        i.showTip(e.msg)
                }
            });
            var r = i.url2Cid();
            r && i.reportMC("b_shangou_online_e_ljjmjshl_mc", r, null, null, {
                order_id: d
            })
        },
        getPrice: function() {
            var e = $(".J-checkbox")
              , a = $(".J-checkbox:checked")
              , n = 0;
            if (e.length === a.length && (e.each(function(e, t) {
                var a = $(t).parents(".J-item").find(".J-num")
                  , i = a.data("max")
                  , t = a.val();
                i == t && n++
            }),
            e.length === n))
                return i.showTip("全部商品的退款，请选择全单退款"),
                void $(this).prop("checked", !1);
            var s = $(this)
              , d = s.attr("data-view-id")
              , l = s.data("poiId")
              , r = $(".J-box-fee")
              , c = $(".J-total");
            o = [],
            a.each(function(e, t) {
                var a = $(t).parents(".J-item")
                  , i = {};
                i.itemId = a.data("itemId"),
                i.wmFoodId = a.data("wmFoodId"),
                i.count = a.find(".J-num").val(),
                o.push(i)
            }),
            o.length ? (o = JSON.stringify(o),
            $.ajax({
                type: "POST",
                url: t.order.getPartRefundFoodPrice,
                data: {
                    wmPoiId: l,
                    wmOrderViewId: d,
                    foodInfos: o
                },
                success: function(e) {
                    if (0 === e.code) {
                        var t = e.data
                          , a = t.refundMoney
                          , o = t.hasBoxFee;
                        a && c.text(a),
                        o && r.show()
                    } else
                        i.showTip(e.msg)
                }
            })) : (c.text(0),
            r.hide())
        },
        _applyPartRefund: function(e, a, n) {
            $.ajax({
                type: "POST",
                url: t.order.applyPartRefund,
                data: {
                    wmPoiId: e,
                    wmOrderViewId: a,
                    reason: n,
                    foodInfos: o
                },
                success: function(e) {
                    0 === e.code ? (i.showTip("部分退款成功！"),
                    window.location.reload()) : i.showTip(e.msg)
                }
            })
        },
        recount: function(e) {
            var t = $(e.target)
              , a = t.parents(".J-item")
              , i = a.find(".J-num-add")
              , o = a.find(".J-num-sub")
              , d = a.find(".J-checkbox")
              , l = a.find(".J-num");
            if (!t.hasClass("disabled")) {
                var r = parseInt(l.val());
                if (t.hasClass("J-num-sub"))
                    i.removeClass("disabled"),
                    r > 1 && (l.val(r - 1),
                    clearTimeout(n),
                    n = setTimeout(function() {
                        s.getPrice.call(d)
                    }, 300)),
                    2 === r && t.addClass("disabled");
                else {
                    o.removeClass("disabled");
                    var c = parseInt(t.data("max"));
                    c > r && (l.val(r + 1),
                    clearTimeout(n),
                    n = setTimeout(function() {
                        s.getPrice.call(d)
                    }, 300)),
                    r === c - 1 && t.addClass("disabled")
                }
            }
        },
        handleTip: function(e) {
            switch (e) {
            case 1:
                i.showTip("货到付款订单暂不支持部分退款");
                break;
            case 2:
                i.showTip("订单不支持部分退款");
                break;
            case 3:
                i.showTip("订单正在退款中或已退款");
                break;
            case 4:
                i.showTip("骑手垫款商家不支持部分退款");
                break;
            case 5:
                i.showTip("订单仅有一件商品，请选择全部退款");
                break;
            case 6:
                i.showTip("顾客app版本过低，不支持部分退款");
                break;
            case 7:
                i.showTip("不允许商家申请退款")
            }
        },
        bindEvent: function() {
            var e = this;
            $(document).on("click", ".J-part-refund", e.showRefundPartDialog),
            $(document).on("click", ".J-weight-refund", e.showRefundWeightDialog),
            $(document).on("change", ".J-checkbox", e.getPrice),
            $(document).on("click", ".J-num-ope", e.recount),
            $(document).on("keydown", ".J-num", function() {
                return !1
            }),
            $(document).on("change", ".J-part-refund-reason", function(e) {
                var t = $(this)
                  , a = t.next();
                t.val() ? a.addClass("hide") : a.removeClass("hide")
            }),
            $(document).on("change", ".J-weight-checkbox", function(e) {
                var t = $(this)
                  , a = t.closest(".J-weight-item-1").data("item-id")
                  , i = $(".J-weight-item-2[data-item-id=" + a + "]");
                this.checked ? i.show() : (i.hide(),
                i.find(".J-weight-input").val(""))
            }),
            $(document).on("input", ".J-weight-input", function(e) {
                var t = $(this)
                  , a = t.val()
                  , i = t.closest(".form-group")
                  , o = parseFloat(t.data("unit-count"))
                  , n = a.indexOf(".")
                  , s = n + 2;
                n > -1 && s < a.length ? this.value = a.slice(0, s) : 0 > a || a >= o ? i.addClass("has-error") : i.removeClass("has-error")
            })
        }
    };
    s.bindEvent()
});
define("module/order/order_remind_init", ["module/cookie", "module/interface", "widgets/normal_dialog", "module/page_jump", "util/utils"], function(e, t, o, n, i) {
    var r = {
        initRemindDOM: function(e) {
            var o = [];
            e.each(function(e, t) {
                var n = {};
                n.wmOrderViewId = $(t).attr("data-view-id"),
                n.wmPoiId = $(t).data("poiId"),
                o.push(n)
            }),
            $.ajax({
                url: t.order.queryReminderDetail,
                data: {
                    orderInfos: JSON.stringify(o)
                },
                success: function(e) {
                    if (0 === e.code) {
                        var e = e.data;
                        for (var t in e)
                            if (e[t].length > 0) {
                                var o = []
                                  , n = $("#" + t)
                                  , i = n.data("status")
                                  , r = e[t];
                                o.push("<p><strong>催单信息</strong></p>");
                                for (var s = 0, a = r.length; a > s; s++)
                                    o.push('<div><span class="reminder-num color-666" data-remind-id="' + r[s].reminder_id + '">用户第' + (s + 1) + "次催单</span>"),
                                    o.push(' <span class="color-999 font-12">' + r[s].reminder_time_fmt + "</span></div>"),
                                    r[s].response_content && (o.push('<div><span class="color-666">商家回复</span>'),
                                    o.push(' <span class="color-999 font-12">' + r[s].response_time_fmt + "</span></div>"),
                                    o.push('<div class="color-a2 font-12">' + r[s].response_content + "</div>"));
                                8 == i && o.push('<div><span class="color-666">订单已完成，催单失效</span></div>'),
                                9 == i && o.push('<div><span class="color-666">订单已取消，催单失效</span></div>'),
                                o.push('<div class="posa reminder-ope"><button type="button" class="btn btn-default btn-sm btn-stable J-btn-process">回复</button></div>'),
                                n.find(".reminder-info").show().append(o.join("")),
                                $("#status-1").is(":checked") && $(".J-btn-process").hide(),
                                !$("#status-0").is(":checked") || 8 != i && 9 != i || n.remove()
                            }
                    }
                }
            })
        },
        bindEvent: function() {
            $(".J-order-list").on("click", ".J-btn-process", function() {
                function r() {
                    var e = o({
                        title: "回复催单",
                        content: v,
                        btns: [{
                            txt: "确定",
                            fn: function() {
                                var o = $("#J-reminder-select")
                                  , n = $(".text-input-1")
                                  , r = o.val()
                                  , a = o.find("option:selected").text()
                                  , d = e.find(".J-confirm");
                                if ("-1" === r && (a = $.trim(n.val())),
                                a) {
                                    var u = localStorage.getItem("sendMsgByIm");
                                    d.attr("disabled", !0),
                                    "true" === u ? (a = "亲爱的顾客您好，已收到您的催单消息，" + a,
                                    $.ajax({
                                        url: "/v2/order/customer/reminder/unprocessed/w/im/response",
                                        method: "POST",
                                        data: {
                                            acctId: s,
                                            orderViewId: c,
                                            wmPoiId: l,
                                            userId: p,
                                            remindId: f,
                                            response: a
                                        },
                                        success: function(e) {
                                            d.removeAttr("disabled"),
                                            0 === e.code ? (i.showTip("回复成功，消息已通过在线联系功能发送给顾客", "success"),
                                            setTimeout(function() {
                                                location.reload()
                                            }, 500)) : i.showTip("回复失败,请稍后重试")
                                        },
                                        error: function() {
                                            d.removeAttr("disabled"),
                                            i.showTip("网络错误,请稍后重试")
                                        }
                                    })) : $.ajax({
                                        url: t.order.postReminderReply,
                                        method: "POST",
                                        data: {
                                            wmOrderViewId: c,
                                            wmPoiId: l,
                                            remindId: f,
                                            response: a
                                        },
                                        success: function(e) {
                                            d.removeAttr("disabled"),
                                            0 === e.code ? location.reload() : i.showTip("回复失败,请稍后重试")
                                        },
                                        error: function() {
                                            d.removeAttr("disabled"),
                                            i.showTip("网络错误,请稍后重试")
                                        }
                                    })
                                } else
                                    i.showTip("回复内容不能为空!")
                            }
                        }, {
                            txt: "取消",
                            fn: function() {}
                        }],
                        "class": "J-remind-dialog"
                    })
                      , n = $("#J-reminder-select")
                      , r = $(".text-input-1");
                    $.ajax({
                        url: t.order.getReminderReply,
                        success: function(e) {
                            var t = e.data
                              , o = "";
                            t.length ? ($.each(t, function(e, t) {
                                o += '<option value="' + (e + 1) + '">' + t + "</option>"
                            }),
                            n.append(o)) : (r.show(),
                            i.showTip("获取原因失败,请手动输入回复原因")),
                            n.append('<option value="-1">其他原因</option>')
                        },
                        error: function() {
                            n.append('<option value="-1">其他原因</option>'),
                            r.show(),
                            i.showTip("获取原因失败,请手动输入回复原因")
                        }
                    })
                }
                var s = e.getCookie("acctId")
                  , a = e.getCookie("device_uuid")
                  , d = $(this).parents(".order")
                  , c = d.attr("data-view-id")
                  , l = d.data("poiId")
                  , p = d.data("userId")
                  , u = d.data("poiName")
                  , m = $(this).parents(".reminder-info").find(".reminder-num")
                  , f = m.eq(m.length - 1).data("remindId")
                  , v = '<div class="alert alert-dismissible" role="alert">请准确回复顾客的催单请求</div><select name="" id="J-reminder-select" class="form-control"></select><p><textarea class="text-input-1" placeholder="请输入原因" style="display:none"></textarea></p>';
                $.ajax({
                    url: t.root.chatLaunch,
                    type: "GET",
                    data: {
                        acctId: s,
                        uuid: a,
                        wmPoiId: l,
                        wmUserId: p,
                        orderViewId: c
                    },
                    success: function(t) {
                        if (0 === t.code) {
                            var i = t.data;
                            if (localStorage.removeItem("sendMsgByIm"),
                            1 === i.userVersionSupport) {
                                var s = localStorage.getItem("waimaie_im_info")
                                  , a = JSON.parse(s) || {}
                                  , d = !1
                                  , c = !1;
                                if (1 == a.acctSupportIM || 3 == a.acctSupportIM) {
                                    var l = e.getCookie("wmPoiId");
                                    if ("-1" == l)
                                        d = !1,
                                        c = !1;
                                    else {
                                        var p = a.poiSwitch || []
                                          , u = p[0] || {};
                                        d = u.poiImValid && u.degradeImTotalSwitch,
                                        c = u.poiImSwitch
                                    }
                                }
                                if (console.log(d),
                                console.log(c),
                                d === !0)
                                    if (c === !0)
                                        r(),
                                        localStorage.setItem("sendMsgByIm", !0);
                                    else
                                        var m = o({
                                            title: "开通在线联系功能",
                                            content: "您尚未开通顾客在线联系功能，开通后可与顾客在线沟通",
                                            btns: [{
                                                txt: "开通",
                                                fn: function() {
                                                    n.go("/v2/shop/systemSettings/r/im")
                                                }
                                            }, {
                                                txt: "不开通",
                                                fn: function() {
                                                    m.modal("hide"),
                                                    r()
                                                }
                                            }]
                                        });
                                else
                                    r()
                            } else
                                r()
                        } else
                            r()
                    },
                    error: function() {
                        r()
                    }
                }),
                $(document).off("change", "#J-reminder-select"),
                $(document).on("change", "#J-reminder-select", function() {
                    var e = $(this).val()
                      , t = $(".text-input-1");
                    if ("-1" === e) {
                        var o = localStorage.getItem("sendMsgByIm");
                        "true" === o ? ($(".J-remind-dialog").modal("hide"),
                        parent.startChat({
                            wmUserId: p,
                            orderViewId: c,
                            wmPoiId: l,
                            wmPoiName: u,
                            sendRemindMsg: !0,
                            remindId: f,
                            channelId: 1001
                        })) : t.show()
                    } else
                        t.hide()
                });
                var h = i.url2Cid();
                h && i.reportMC("b_shangou_online_e_00ektgr3_mc", h, null, null, {
                    order_id: c
                })
            })
        }
    };
    return r.bindEvent(),
    r
});
define("widgets/pagination_kangarooui", [""], function() {
    function e(e) {
        this.$pel = e.$pel && e.$pel.length && e.$pel.length > 0 ? e.$pel : $(window),
        this.pagenum = /^\d+$/.test(e.pagenum) ? e.pagenum : 1,
        this.curpage = void 0;
        var a = "[object Function]" == Object.prototype.toString.call(e.loadData) ? e.loadData : function() {}
        ;
        this.loadData = function() {
            var e = this;
            a(e.curpage, function(a) {
                for (var i = e.$pre.nextAll(), t = i.size(), s = 0; t - 1 > s; s++)
                    i.eq(s).remove();
                e.$pre.after(e.getPagesHtml(e.curpage, a)),
                e.pagenum = a,
                e.refreshPageJump()
            })
        }
    }
    return e.create = function(a) {
        var i = new e(a);
        return i.init(),
        i
    }
    ,
    e.prototype.render = function() {
        this.$pre = $('<li><a href="javascript:;" aria-label="Previous"><span aria-hidden="true">«</span></a></li>'),
        this.$next = $('<li><a href="javascript:;" aria-label="Next"><span aria-hidden="true">»</span></a></li>'),
        this.$pel.append(this.$pre).append(this.$next)
    }
    ,
    e.prototype.getPagesHtml = function(e, a) {
        if (e > a)
            return void this.$pel.hide();
        this.$pel.show();
        var i, t, s = [], p = "";
        i = e - 3,
        t = e + 2,
        1 > i && (t = t + 1 - i,
        i = 1),
        t > a && (i -= t - a,
        i = 1 > i ? 1 : i,
        t = a),
        i > 1 && s.push('<li class="page" pindex="1"><a href="javascript:;">1</a></li><li><span class="ellipsis">...</span></li>');
        for (var r = i; t >= r; r++)
            p = '<li class="page' + (r == e ? " active" : "") + '" pindex="' + r + '"><a href="javascript:;">' + r + "</a></li>",
            s.push(p);
        return a > t && s.push('<li><span class="ellipsis">...</span></li><li class="page" pindex="' + a + '"><a href="javascript:;">' + a + "</a></li>"),
        s.join("")
    }
    ,
    e.prototype.goPage = function(e, a) {
        var i = parseInt(e);
        return !/^\d+$/.test(e) || 1 > i ? void alert("请输入正确的页码！") : void (i != a.curpage && (a.curpage = i,
        a.loadData(a.curpage)))
    }
    ,
    e.prototype.refreshPageJump = function() {
        var e = this.curpage;
        1 == e && this.$pre.addClass("disabled"),
        e == this.pagenum && this.$next.addClass("disabled"),
        1 != e && this.$pre.removeClass("disabled"),
        e != this.pagenum && this.$next.removeClass("disabled")
    }
    ,
    e.prototype.init = function() {
        var e = this;
        this.render(),
        this.goPage(1, this),
        this.$pel.delegate(".page", "click", function() {
            e.goPage(parseInt($(this).attr("pindex")), e)
        }),
        this.$pre.click(function() {
            $(this).hasClass("disabled") || e.goPage(1 == e.curpage ? 1 : e.curpage - 1, e)
        }),
        this.$next.click(function() {
            $(this).hasClass("disabled") || e.goPage(e.curpage == e.pagenum ? e.pagenum : e.curpage + 1, e)
        })
    }
    ,
    e.prototype.refresh = function() {
        this.curpage = void 0,
        this.goPage(1, this)
    }
    ,
    e
});
define("module/order/order_list_dom_order_phone", [], function() {
    "use strict";
    return function(n) {
        var s = n.hide_flag && 0 === n.encrypted
          , e = n.is_use_privacy_phone
          , a = n.order_privacy_phone_status
          , o = n.order_privacy_phone
          , p = n.order_backup_privacy_phones || []
          , r = n.order_phone
          , t = n.showPrePhoneType
          , i = "顾客没有填写手机号"
          , c = n.isCycleOrder
          , l = "";
        return e === !0 ? 0 === a ? (1 === +c ? (l += '<div><span class="phone-title color-999">隐私号码</span><span class="J-user-privacy-phone-main">' + (2 === t ? o : i) + "</span>",
        s && 2 === t && (l += '<button class="J-get-cycle-privacy-phone btn btn-default btn-xs" data-type="2">点击查看</button>'),
        l += "</div>",
        l += '<div class="J-user-backup-phone-main">',
        p.forEach(function(n, s) {
            l += '<div><span class="phone-title color-999">备用号码' + (p.length > 1 ? s + 1 : "") + "</span>" + n + "</div>"
        }),
        l += "</div>") : (l += '<div><span class="phone-title color-999">隐私号码</span><span>' + (2 === t ? o : i) + "</span></div>",
        p.forEach(function(n, s) {
            l += '<div><span class="phone-title color-999">备用号码' + (p.length > 1 ? s + 1 : "") + "</span>" + n + "</div>"
        })),
        r && (l += '<div><span class="phone-title color-999">顾客电话</span><span class="J-order-user-phone-main">' + r + "</span></div>")) : l += '<div><span class="phone-title color-999">顾客电话</span><span class="J-order-user-phone-main">' + (2 === t ? r || o : i) + "</span></div>" : (l += '<div><span class="phone-title color-999">顾客电话</span><span class="J-order-user-phone-main">' + (2 === t ? r : i) + "</span>",
        s && (l += '<button class="J-get-real-info btn btn-default btn-xs" data-type="orderPhone">点击查看</button>'),
        l += "</div>"),
        l
    }
});
define("module/order/order_list_dom_product", [], function() {
    "use strict";
    return function(a, i) {
        var s = a.remark || ""
          , s = s.replace(/</g, "&lt;")
          , d = a.cartDetailVos || []
          , o = a.activity || []
          , t = "";
        "food" !== CommConstants.shopCate && (t = '<span class="color-999 font-12 ml10">共' + i + "件商品</span>");
        var r = '<div class="product-title"><strong>商品信息</strong>' + t + ' <a href="javascript:;" class="pull-right J-display-more drop-text color-999"> <i class="fa fa-angle-up drop-arrow"></i></a></div><div class="drop-con order-first">';
        r += '<div class="remark-info">' + (s ? '<div><span class="color-999">备注：</span>' + s + "</div>" : "") + (1 == a.has_been_invoiced ? '<div><span class="color-999">发票：</span>' + a.invoice_title + "</div>" : "") + (a.invoice_taxpayer_id ? '<div><span class="color-999">税号：</span>' + a.invoice_taxpayer_id + "</div>" : "") + "</div>",
        r += '<div class="product-list"><table class="J-pro-list">',
        d.forEach(function(i) {
            1 != a.cartCount && (r += '<tr class="color-a2"><td colspan="4" class="order-p-t"><i class="fa fa-custom-pocket"></i> ' + i.cartName + "</td></tr>");
            var s = i.details || [];
            s.forEach(function(a) {
                r += '<tr><td width="60%"><div class="mr10">' + a.food_name + '</div></td><td width="15%"><div>&yen;' + a.origin_food_price.toFixed(2) + "</div></td>",
                r += a.count > 1 ? '<td width="10%" class="product-num"><div>x' + a.count + "</div></td>" : '<td width="10%"><div>x' + a.count + "</div></td>",
                r += '<td width="15%" class="text-right"><div>&yen;' + (a.count * a.origin_food_price).toFixed(2) + "</div></td></tr>"
            }),
            r += '<tr class="color-a2"><td colspan="4"><div class="order-table-line"></div></td></tr>'
        }),
        o.forEach(function(a, i) {
            0 === i && (r += '<tr class="color-a2 J-degree-area" style="display: none"><td colspan="4" class="order-p-t"><i class="fa fa-custom-gift2"></i> 赠品</td></tr>'),
            r += '<tr class="J-degree-area" style="display:none"><td colspan="2">' + a.giftName + '<span class="color-666"> [' + a.actDesc + "]</span></td><td>x" + a.count + "</td><td></td></tr>"
        }),
        r += "</table></div>",
        a.boxPriceTotal > 0 && (r += '<div class="order-m-t clearfix"><div class="pull-left color-999">' + CommConstants.shopCategoryObj.packageG + '费</div><div class="pull-right">&yen;' + a.boxPriceTotal.toFixed(2) + "</div></div>"),
        a.package_bag_money > 0 && (r += '<div class="order-m-t clearfix"><div class="pull-left color-999">打包费</div><div class="pull-right">&yen;' + (a.package_bag_money / 100).toFixed(2) + "</div></div>"),
        r += '<div class="J-charge-info"  data-agent-or-direct-poi="' + a.agent_or_direct_poi + '"></div></div>';
        var c = "food" == CommConstants.shopCate ? "order-des" : "order-des sc";
        return 1040 == a.shipping_service ? r += '<div class="posa ' + c + ' icons-quancheng"></div>' : 1 === a.pick_type ? r += '<div class="posa ' + c + ' icons-daodian"></div>' : a.tips[0] && a.tips[0].indexOf("大额") > -1 && 1 == a.wm_order_pay_type ? r += '<div class="posa ' + c + ' icons-dae-daofu"></div>' : a.tips[0] && a.tips[0].indexOf("大额") > -1 && 1 != a.wm_order_pay_type ? r += '<div class="posa ' + c + ' icons-dae"></div>' : 1 == a.wm_order_pay_type ? r += '<div class="posa ' + c + ' icons-daofu"></div>' : a.isPreSale && (r += '<div class="posa ' + c + ' icons-pre"></div>'),
        r
    }
});
define("module/order/order_list_dom_ope", [], function() {
    "use strict";
    return function(t, n, e, a) {
        var r = !1;
        r = CommConstants.newCategory ? t.part_refund_time_limit && 5 != t.pay_status : 8 != t.status && 5 != t.pay_status;
        var d = 5 != t.pay_status && 1 != t.wm_order_pay_type && a > 1 && (t.status < 8 || t.part_refund_time_limit);
        22 === t.poiFirstTag && t.b2cPoi && (r = !1,
        d = !1);
        var o = "";
        if (CommConstants.IS_IN_APP)
            if (n)
                0 != t.canBeHandled && (o += 4 != t.self_service ? e ? '<button class="btn btn-brand btn-stable J-confirm">接单</button><button class="btn btn-brand J-confirmAndPrint">接单并打印小票</button>' : '<button class="btn btn-brand btn-stable J-confirm">接单</button>' : '<button class="btn" disabled="disabled">GPRS自动接单中</button>',
                o += '<input type="hidden" name="copyContent_' + t.wm_order_id_view_str + '" id="copyContent_' + t.wm_order_id_view_str + '" value="' + t.orderCopyContent + '"><button class="btn btn-primary btn-stable J-copy-order ubl" data-ubl-action="click" data-ubl-des="copyOrder">复制订单</button><button class="btn btn-default btn-stable J-cancel-order ubl" data-ubl-action="click" data-ubl-des="cancelOrder" data-refresh="true">取消订单</button>');
            else if (9 != t.status)
                if (1 === t.isCycleOrder)
                    o += (d ? '<button class="btn btn-default J-cycle-section-cancel" >分期退款</button>' : "") + '<button class="btn btn-primary J-print-order ubl" data-ubl-action="click" data-ubl-des="printOrder" data-clicked="false">打印订单</button><input type="hidden" name="copyContent_' + t.wm_order_id_view_str + '" id="copyContent_' + t.wm_order_id_view_str + '" value="' + t.orderCopyContent + '"><button id="copyOrder_' + t.wm_order_id_view_str + '" class="btn btn-primary J-copy-order ubl" data-id="' + t.wm_order_id_view_str + '" data-ubl-action="click" data-ubl-des="copyOrder">复制订单</button>' + (r && 1 === t.orderCycleCancelButtonShow ? '<button class="btn btn-default J-cycle-whole-cancel">整单取消</button>' : "");
                else if (o += '<button class="btn btn-primary J-weight-refund" data-clicked="false" style="display:none" >退差价</button>',
                d && (o += '<button class="btn btn-primary J-part-refund ubl" data-ubl-action="click" data-ubl-des="partRefund" data-clicked="false" >部分退款</button>'),
                o += '<button class="btn btn-primary J-print-order ubl" data-ubl-action="click" data-ubl-des="printOrder" data-clicked="false">打印订单</button><input type="hidden" name="copyContent_' + t.wm_order_id_view_str + '" id="copyContent_' + t.wm_order_id_view_str + '" value="' + t.orderCopyContent + '"><button id="copyOrder_' + t.wm_order_id_view_str + '" class="btn btn-primary J-copy-order ubl" data-id="' + t.wm_order_id_view_str + '" data-ubl-action="click" data-ubl-des="copyOrder">复制订单</button>',
                r) {
                    var b = 1 == t.wm_order_pay_type ? "取消订单" : "取消订单并退款";
                    o += '<button class="btn btn-default J-cancel-order ubl"  data-ubl-action="click" data-ubl-des="cancelOrder">' + b + "</button>"
                }
        return o
    }
});
define("module/order/order_list_dom_cycle", ["module/interface", "widgets/normal_dialog", "util/utils"], function(e, t, r) {
    var i = {
        initCycleDOM: function(t, i) {
            !i || i.length < 1 || t.each(function(t, a) {
                var d = {};
                d.wmOrderViewId = $(a).attr("data-view-id"),
                d.wmPoiId = $(a).data("poiId"),
                d.itemData = i.filter(function(e) {
                    return e.wm_order_id_view_str === d.wmOrderViewId
                })[0],
                1 === d.itemData.isCycleOrder && new Vue({
                    el: "#cycle_order_" + d.wmOrderViewId,
                    template: "#cyclePurchaseOrder",
                    data: {
                        cycleOrderData: d.itemData,
                        wmOrderViewId: d.wmOrderViewId,
                        wmPoiId: d.wmPoiId,
                        isShowDeliveryOrSend: d.itemData.status > 3,
                        isShowDeliveryBtn: 0 === d.itemData.orderCyclePerformanceInfoVO.status
                    },
                    created: function() {},
                    methods: {
                        sendCommodity: function(t) {
                            var i = this
                              , a = r.url2Cid();
                            a && r.reportMC("b_shangou_online_e_eeqt5iqp_mc", a, {
                                poi_id: i.wmPoiId
                            }),
                            i.$http.post(e.order.sc.initiateDelivery, {
                                orderViewId: i.wmOrderViewId,
                                wmPoiId: i.wmPoiId,
                                index: t
                            }).then(function(e) {
                                var t = e.body;
                                0 === t.code ? (this.isShowDeliveryBtn = !1,
                                this.cycleOrderData.orderCyclePerformanceInfoVO.status = 20,
                                i.$toast.success("提交成功")) : i.$toast.warn(t.msg)
                            }, function() {
                                i.$toast.warn("网络异常，请稍后重试")
                            })
                        }
                    },
                    watch: {},
                    computed: {
                        statusObj: function() {
                            var e = ""
                              , t = "";
                            switch (this.cycleOrderData.orderCyclePerformanceInfoVO.status) {
                            case 0:
                                e = "待发货",
                                t = "本期待发货";
                                break;
                            case 20:
                                e = "发货中",
                                t = "本期已发货";
                                break;
                            case 40:
                                e = "",
                                t = "本期已发货";
                                break;
                            case 100:
                                e = "",
                                t = "本期已取消";
                                break;
                            default:
                                e = "",
                                t = ""
                            }
                            return {
                                deliveryStatusText: e,
                                sendStatusText: t
                            }
                        }
                    }
                })
            })
        }
    };
    return i
});
define("module/order/order_list_dom_product_btc", [], function() {
    "use strict";
    return function(i, d, a, s) {
        var o = i.remark || ""
          , o = o.replace(/</g, "&lt;")
          , t = a || []
          , e = i.activity || []
          , r = "";
        "food" !== CommConstants.shopCate && (r = '<span class="color-999 font-12 ml10">共' + d + "件商品</span>");
        var c = '<div class="product-title"><strong>商品信息</strong>' + r + ' <a href="javascript:;" class="pull-right J-display-more drop-text color-999"> <i class="fa fa-angle-up drop-arrow"></i></a></div><div class="drop-con order-first">';
        c += '<div class="remark-info">' + (o ? '<div><span class="color-999">备注：</span>' + o + "</div>" : "") + (1 == i.has_been_invoiced ? '<div><span class="color-999">发票：</span>' + i.invoice_title + "</div>" : "") + (i.invoice_taxpayer_id ? '<div><span class="color-999">税号：</span>' + i.invoice_taxpayer_id + "</div>" : "") + "</div>",
        c += '<div class="product-list"><table class="J-pro-list">',
        t.forEach(function(i) {
            c += '<tr><td width="60%"><div class="mr10">' + i.food_name + '</div></td><td width="15%"><div>&yen;' + i.origin_food_price.toFixed(2) + "</div></td>",
            c += i.count > 1 ? '<td width="10%" class="product-num"><div>x' + i.count + "</div></td>" : '<td width="10%"><div>x' + i.count + "</div></td>",
            c += '<td width="15%" class="text-right"><div>&yen;' + (i.count * i.origin_food_price).toFixed(2) + "</div></td></tr>"
        }),
        c += '<tr class="color-a2"><td colspan="4"><div class="order-table-line"></div></td></tr>',
        c += "</table></div>",
        c += "</div>",
        s && (e.forEach(function(i, d) {
            c += "<table>",
            0 === d && (c += '<tr class="color-a2 J-degree-area" style="display: none"><td colspan="4" class="order-p-t"><i class="fa fa-custom-gift2"></i> 赠品</td></tr>'),
            c += '<tr class="J-degree-area" style="display:none"><td colspan="2">' + i.giftName + '<span class="color-666"> [' + i.actDesc + "]</span></td><td>x" + i.count + "</td><td></td></tr></table>"
        }),
        i.boxPriceTotal > 0 && (c += '<div class="order-m-t clearfix"><div class="pull-left color-999">' + CommConstants.shopCategoryObj.packageG + '费</div><div class="pull-right">&yen;' + i.boxPriceTotal.toFixed(2) + "</div></div>"),
        i.package_bag_money > 0 && (c += '<div class="order-m-t clearfix"><div class="pull-left color-999">打包费</div><div class="pull-right">&yen;' + (i.package_bag_money / 100).toFixed(2) + "</div></div>"),
        c += '<div class="J-charge-info"  data-agent-or-direct-poi="' + i.agent_or_direct_poi + '"></div>');
        var l = "food" == CommConstants.shopCate ? "order-des" : "order-des sc";
        return 1040 == i.shipping_service ? c += '<div class="posa ' + l + ' icons-quancheng"></div>' : 1 === i.pick_type ? c += '<div class="posa ' + l + ' icons-daodian"></div>' : i.tips[0] && i.tips[0].indexOf("大额") > -1 && 1 == i.wm_order_pay_type ? c += '<div class="posa ' + l + ' icons-dae-daofu"></div>' : i.tips[0] && i.tips[0].indexOf("大额") > -1 && 1 != i.wm_order_pay_type ? c += '<div class="posa ' + l + ' icons-dae"></div>' : 1 == i.wm_order_pay_type && (c += '<div class="posa ' + l + ' icons-daofu"></div>'),
        c
    }
});
define("module/order/order_list_dom", ["module/order/order_list_dom_time", "module/order/order_list_dom_phone", "module/order/order_list_dom_order_phone", "module/order/order_list_dom_product", "module/order/order_list_dom_ope", "module/order/order_list_dom_cycle", "module/order/order_list_dom_product_btc"], function(t, e, s, a, n, o, r) {
    "use strict";
    return function(o, i, d) {
        function l(t, e) {
            var s = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
              , a = new Date(1e3 * t)
              , n = a.getFullYear()
              , o = a.getMonth() + 1
              , r = a.getDate()
              , i = s[a.getDay()];
            return n + "-" + o + "-" + r + " " + i + " " + e
        }
        console.log("*****资源已成功remote*****");
        var p = 0;
        if (o.is_cross_day_pre_order || o.is_pre_order) {
            var c = new Date(o.delivery_btime_fmt)
              , b = new Date(1e3 * o.currentSystemTime || 0);
            if (b > c)
                p = 3;
            else {
                var y = c.getDate() - b.getDate();
                p = y > 1 ? 3 : 1 === y ? 2 : 0 === y ? 1 : 3
            }
        }
        var u = CommConstants.waimai_e_wmPoiId
          , v = 0
          , m = o.cartDetailVos || [];
        m.forEach(function(t) {
            var e = t.details || [];
            e.forEach(function(t) {
                v += t.count || 0
            })
        });
        var f = 0 == o.need_tableware ? "green-mountain" : ""
          , _ = (1 === o.isCycleOrder ? "cycle-order-time" : "",
        8 !== o.status && 9 !== o.status && 40 !== o.logistics_status || 5 === o.pay_status)
          , J = o.rxOrder
          , h = '<li class="order order-list-item posr J-order" id="' + o.wm_order_id_view_str + '" data-pre="' + p + '" data-id="' + o.id + '" data-view-id="' + o.wm_order_id_view_str + '" data-poi-id="' + o.wm_poi_id + '" data-order-time="' + o.order_time + '" data-status="' + o.status + '" data-cross="' + o.crossBorderPoi + '" data-b2c-poi="' + o.b2cPoi + '" data-poi-first-tag="' + o.poiFirstTag + '" data-city-id="' + o.poi_city_id + '" data-poi-name="' + o.poi_name + '" data-user-id="' + o.user_id + '" data-destination-date="' + o.delivery_btime_fmt + '" data-pay-status="' + o.pay_status + '" data-delivery-status="' + o.logistics_status + '" data-delivery-code="' + o.logistics_code + '" data-pay-type="' + o.wm_order_pay_type + '" data-pick-type="' + o.pick_type + '" data-confirm-time="' + o.confirm_time + '" data-recipient-name="' + o.recipient_name + '" data-poi-sla="' + o.poiUseSLA + '" data-utime="' + o.utime + '" data-current-system-time="' + o.currentSystemTime + '" data-encrypted="' + o.encrypted + '" data-lx-param="{order_id: \'' + o.wm_order_id_view_str + '\'}" data-confirm-delivery="' + o.confirmDeliveryStatus + '" data-third-delivery-code="' + o.thirdLogisticsCode + '" data-is-cycle-order="' + o.isCycleOrder + '" data-total-cycle-count="' + (o.orderCyclePerformanceInfoVO ? o.orderCyclePerformanceInfoVO.totalCycleCount : "") + '" data-hasWarehouse="' + o.hasWarehouse + '" data-own-rights="' + o.ownRights + '" data-rights-valid="' + o.rightsValid + '">';
        if (h += '<div class="order-info"><div class="order-title posr ' + f + '"><div class="order-num">#<span class="font-20">' + o.num + '</span><i class="arrow"></i></div>' + (1 === o.isCycleOrder ? '<span class="cycle-order font-20 color-main ml20">周期购</span><span class="font-14 ml5">共' + o.orderCyclePerformanceInfoVO.totalCycleCount + '期</span><span class="font-14 ml20">第' + o.orderCyclePerformanceInfoVO.index + '期</span><span class="cycle-order-time ml5">' + l(o.orderCyclePerformanceInfoVO.estimateDate, o.orderCyclePerformanceInfoVO.estimateTimeDesc) + "</span>" : '<span class="J-order-time order-time">' + t(o.pick_type, p, o.delivery_btime_fmt, o.estimate_arrival_time_fmt) + "</span>") + '<div class="pull-right order-state color-666"></div>' + (p ? '<div class="order-pre font-12 posa">预</div>' : "") + '</div><div class="order-warn order-reason J-order-reason color-666" style="display: none;word-break: break-all;"></div><div class="order-warn J-order-countdown color-666" style="display: none;">请处理退款申请，<span class="J-cut-down"></span> 后将自动同意退款</div><div class="order-warn J-goods-order-countdown color-666" style="display: none;">请处理退货申请，<span class="J-cut-down"></span> 后将自动同意退货</div><div class="order-warn J-change-address-warn color-666" style="display: none;">该订单已申请修改地址，请尽快审核</div><div class="order-warn J-change-address-refund-warn color-666" style="display: none;">该订单曾申请修改地址，后已申请退款，请优先处理退款申请，也可尝试联系用户沟通其诉求</div></div>',
        h += '<div class="user-info"><div class="user-name font-12 color-999"><span class="j-user-nick-name color-333 font-20">' + (o.recipient_name || "美团客人") + "</span>" + (o.is_poi_first_order ? "<span>#门店新客</span>" : '<span class="J-order-num"></span>') + '<span class="J-favorite" style="display:none">#收藏店铺</span>' + (false && !_ || -1 != u && o.wm_poi_id != u ? "" : '<button class="btn btn-default btn-sm pull-right hide posr start-chat J-start-chat">发起聊天 <b class="tips posa hide J-chat-tips"></b></button>') + (J ? '<button class="btn btn-default btn-sm pull-right posr start-chat J-order-detail">处方订单</button>' : "") + '</div><div class="color-999 mb5 hide J-privacy-record"><i class="fa fa-custom-info-warn"></i> 为保证服务体验，您在拨打或者接听隐私号电话时，可能会被录音</div><div class="user-phone-address J-user-phone-address">' + e(o) + '</div><div class="J-changed-client-info" style="display: none"><div class="color-main font-20 J-changed-address-title"">新地址</div><div class="user-name-changed font-12 color-999""><span class="J-user-nick-name-changed color-333 font-20"></span>' + (false && !_ || -1 != u && o.wm_poi_id != u ? "" : '<button class="btn btn-default btn-sm pull-right hide posr start-chat J-start-chat">发起聊天 <b class="tips posa hide J-chat-tips"></b></button>') + '</div><div class="color-999 mb5 hide J-privacy-record"><i class="fa fa-custom-info-warn"></i> 为保证服务体验，您在拨打或者接听隐私号电话时，可能会被录音</div><div class="user-phone-address J-user-phone-address-changed" style="margin-bottom: 10px"></div></div><div class="color-333 font-16 J-change-address-title" style="display: none; margin-bottom: 10px">修改地址审核</div><button type="button" class="btn btn-primary btn-sm J-agree-change-address" style="display: none;">同意修改</button><button type="button" class="btn btn-default btn-sm J-refuse-change-address" style="display: none; margin-left: 10px">拒绝修改</button></div>',
        0 !== o.showPrePhoneType && (h += '<div class="user-info" data-type="order"><div class="user-name font-12 color-999"><span class="color-333 font-20">预订人</span><span>' + o.pre_tag + '</span></div><div class="user-phone-address J-order-user-phone">' + s(o) + "</div></div>"),
        h += '<div class="order-line"><div class="ball left-ball"></div><div class="ball right-ball"></div></div>',
        false)
            h += '<div class="user-info"><div>医药B2C订单，请移步到新版本查看，<span class="new-b2c-order">点击前往 &gt;</span></div><div>新版本进入路径：右上角切换为“单店模式”；左侧菜单从订单管理进入“医药B2C订单”</div></div>';
        else {
            console.log('myJS: '+ o.is_b2c_order + ';' + o.b2cOrderVersion);
            var g = "food" == CommConstants.shopCate ? "备餐" : "拣货";
            h += '<div class="order-warn J-prepare-countdown color-666" style="display: none;">请于<span class="J-prepare-down"></span> 秒后开始' + g + "，以免顾客1分钟内退款导致损失</div>",
            h += '<div class="order-warn track-warn J-status-track-warn color-666" style="display: none;"><span class="J-status-track-text"></span></div>',
            h += '<div class="J-status-track-section status-track-section big-p posr order-m-t clearfix" style="display:none" data-estimated-make-time="' + o.estimated_make_time + '" data-utime="' + o.utime + '"></div>';
            var w = o.crossBorderPoi && o.b2cPoi && 22 === o.poiFirstTag;
            if (2 !== o.status && 1 !== o.isCycleOrder && 1 !== o.hasWarehouse && (h += '<div class="J-delivery-section order-m-t big-p posr" style="display: none" data-shipping-service="' + o.shipping_service + '"><div class="J-send-delivery-text mb5"><strong>配送信息</strong> </div><div class="J-delivery-display"><div class="J-delivery-ownRights"></div><div class="J-delivery-station"></div><div class="color-a2 mt5 J-delivery-status drop-parent"><span class="J-timeArea timeArea"></span><span class="J-status-info"></span><span class="J-drop-parent"><i class="glyphicon glyphicon-triangle-bottom arrow-down J-display-more J-display-deliveryList"></i><span class="drop-con order-status-list J-order-status-list"></span></span><span class="J-delivery-planfee"></span></div><div class="cursor complain-rider J-complain-rider font-12" style="display:none;">骑手未到店，投诉骑手</div></div><div class="delivery-ope J-delivery-operation posa"><button type="button" class="btn btn-default btn-sm btn-stable J-confirm-delivery" style="display:none">确认送达</button><button type="button" class="btn btn-default btn-sm btn-stable J-check-map">查看地图</button><button type="button" class="btn btn-default btn-sm btn-stable J-send-juhe-delivery" style="display:none" data-toggle="tooltip" data-placement="top" data-original-title="">聚合配送</button>',
            h += '<button type="button" class="btn btn-default btn-sm btn-stable J-send-delivery" style="display:none;position:relative;overflow: initial">发起配送<img class="J-send-delivery-own-rights-img" src="' + o.buttonImg + '"style="display:none;position:absolute;top:-16px;width:60px;left:0;height:20px;"></button>',
            h += '<button type="button" class="btn btn-default btn-sm btn-stable J-send-dev-myself" style="display:none">发起自配</button><button type="button" class="btn btn-default btn-sm btn-stable J-change-logistics" style="display:none">修改物流</button><button type="button" class="btn btn-default btn-sm J-sc-input-rider" style="display:none">修改配送信息</button><button type="button" class="btn btn-default btn-sm btn-stable J-vote-delivery" style="display:none">评价骑手</button><button type="button" class="btn btn-default btn-sm btn-stable J-tip-operation" style="display:none">加小费</button><button type="button" class="btn btn-default btn-sm btn-stable J-cancel-delivery" style="display:none">取消配送</button><button type="button" class="btn btn-default btn-sm J-send-delivery-myself" style="display:none">' + (w ? "清关成功并发货" : "已" + CommConstants.shopCategoryObj.deliveryG) + "</button></div></div>"),
            1 === o.hasWarehouse)
                for (var C = o.warehouseProductList || [], k = 0; k < C.length; k++)
                    h += '<div class="other-info font-14 color-333"><span class="no-wrap other-poi-name J-order-owner">仓库：' + (C[k].warehouseName || "已删除仓库") + "</span></div>",
                    h += '<div class="J-delivery-section order-m-t big-p posr" style="display: none" data-shipping-service="' + o.shipping_service + '" data-delivery-id="' + o.wm_order_id_view_str + "_" + C[k].warehouseId + '"><div class="J-send-delivery-text mb5"><strong>配送信息</strong> </div><div class="J-delivery-display"><div class="J-delivery-ownRights"></div><div class="J-delivery-station"></div><div class="color-a2 mt5 J-delivery-status drop-parent"><span class="J-timeArea timeArea"></span><span class="J-status-info"></span><span class="J-drop-parent"><i class="glyphicon glyphicon-triangle-bottom arrow-down J-display-more J-display-deliveryList"></i><span class="drop-con order-status-list J-order-status-list"></span></span><span class="J-delivery-planfee"></span></div><div class="cursor complain-rider J-complain-rider font-12" style="display:none;">骑手未到店，投诉骑手</div></div><div class="delivery-ope J-delivery-operation posa"><button type="button" class="btn btn-default btn-sm btn-stable J-confirm-delivery" style="display:none">确认送达</button><button type="button" class="btn btn-default btn-sm btn-stable J-check-map">查看地图</button><button type="button" class="btn btn-default btn-sm btn-stable J-send-juhe-delivery" style="display:none" data-toggle="tooltip" data-placement="top" data-original-title="">聚合配送</button><button type="button" class="btn btn-default btn-sm btn-stable J-send-delivery" style="display:none">发起配送</button><button type="button" class="btn btn-default btn-sm btn-stable J-send-dev-myself" style="display:none">发起自配</button><button type="button" class="btn btn-default btn-sm btn-stable J-change-logistics" style="display:none">修改物流</button><button type="button" class="btn btn-default btn-sm J-sc-input-rider" style="display:none">修改配送信息</button><button type="button" class="btn btn-default btn-sm btn-stable J-vote-delivery" style="display:none">评价骑手</button><button type="button" class="btn btn-default btn-sm btn-stable J-tip-operation" style="display:none">加小费</button><button type="button" class="btn btn-default btn-sm btn-stable J-cancel-delivery" style="display:none">取消配送</button><button type="button" class="btn btn-default btn-sm J-send-delivery-myself" style="display:none">' + (w ? "清关成功并发货" : "已" + CommConstants.shopCategoryObj.deliveryG) + "</button></div></div>",
                    h += k !== C.length - 1 ? '<div class="product-info order-m-t big-p posr opened J-drop-parent">' + r(o, v, C[k].details) + "</div>" : '<div class="product-info order-m-t big-p posr opened J-drop-parent">' + r(o, v, C[k].details, !0) + "</div>";
            h += '<div class="reminder-info order-m-t big-p posr" style="display: none"></div>',
            1 === o.isCycleOrder && (h += '<div id="cycle_order_' + o.wm_order_id_view_str + '"></div>'),
            1 === o.isMedicineOrder && (h += '<div class="epidemic-info order-m-t big-p posr opened J-drop-parent" id="medicine_order_' + o.wm_order_id_view_str + '"></div>'),
            1 !== o.hasWarehouse && (h += '<div class="product-info order-m-t big-p posr opened J-drop-parent">' + a(o, v) + "</div>"),
            h += '<div class="responsibility-info order-m-t posr opened big-p J-drop-parent" style="display:none"></div>',
            h += '<div class="refund-info order-m-t posr big-p opened J-drop-parent" style="display:none"></div>',
            h += '<div class="user-reparation-info order-m-t posr big-p" style="display:none"></div>',
            h += '<div class="reparation-info order-m-t big-p posr" style="display:none"></div>'
        }
        return h += '<div class="other-info font-12 color-999"><span class="no-wrap other-poi-name J-order-owner">所属门店：<span class="J-city-name"></span> ' + o.poi_name + '</span><b class="J-order-owner"></b><span class="">' + o.order_time_fmt.substr(5, 11) + ' 下单</span><b class=""></b><span>订单编号：' + o.wm_order_id_view_str + "</span></div>",
        h += '<div class="order-ope clearfix J-btn-wrapper">' + n(o, i, d, v) + "</div>",
        h += "</li>"
    }
});
define("module/order/order_reparation", ["module/interface", "util/utils", "widgets/normal_dialog"], function(a, t, e) {
    function r(a) {
        var t = [];
        return a.each(function(a, e) {
            var r = $(e).data("payStatus");
            if (6 === r || 8 === r) {
                var o = {};
                o.wmOrderViewId = $(e).attr("data-view-id"),
                o.wmPoiId = $(e).data("poiId"),
                t.push(o)
            }
        }),
        t
    }
    function o() {
        function r(r) {
            var c = r.amount
              , p = r.isDiscount
              , l = r.discountRate
              , u = o.data("status")
              , m = o.data("status-des")
              , f = 1 === u ? "申请" : "申诉"
              , b = 1 === u ? 110 : 120
              , h = 1 === u ? "" : o.data("applyReason")
              , v = '<div class="alert alert-dismissible" role="alert">' + m + "</div><p>预计赔付金额：&yen;" + c + "</p>";
            p && (v += '<p class="font-12 color-999">根据平台规定，本单按预计收入' + l + "%赔付</p>"),
            v += '<textarea class="form-control noresize J-text" maxlength="100">' + h + '</textarea><p class="J-error-tips" style="display:none;color:#F00;">请输入赔付理由（100字以内）</p>';
            var w = e({
                title: "配送赔付" + f,
                content: v,
                btns: [{
                    txt: "确定",
                    fn: function() {
                        var e = $.trim($(".J-text").val())
                          , r = $(".J-error-tips");
                        if (e.length) {
                            var o = $(".J-confirm");
                            o.attr("disabled", "disabled"),
                            r.hide(),
                            $.ajax({
                                url: a.order.applyReparation,
                                method: "POST",
                                data: {
                                    wmOrderViewId: i,
                                    wmPoiId: d,
                                    applicationReason: e,
                                    amount: c,
                                    applyStatus: b
                                },
                                success: function(a) {
                                    o.removeAttr("disabled"),
                                    0 === a.code ? (w.modal("hide"),
                                    n.init(s),
                                    t.showTip(f + "成功")) : t.showTip(f + "失败,请稍后重试", "error")
                                },
                                error: function() {
                                    o.removeAttr("disabled"),
                                    t.showTip(f + "失败,请稍后重试", "error")
                                }
                            })
                        } else
                            r.show()
                    }
                }, {
                    txt: "取消",
                    fn: function() {}
                }]
            })
        }
        var o = $(this)
          , s = o.parents(".order")
          , i = s.attr("data-view-id")
          , d = s.data("poiId");
        $.ajax({
            url: a.order.getReparationCount,
            data: {
                wmOrderViewId: i,
                wmPoiId: d
            },
            success: function(a) {
                0 === a.code ? r(a.data) : t.showTip(a.msg)
            },
            error: function() {
                t.showTip(data.msg)
            }
        })
    }
    function s() {
        var r = $(this).parents(".order")
          , o = r.attr("data-view-id")
          , s = r.data("poiId")
          , i = e({
            title: "取消配送赔付",
            content: "确认要取消该订单的配送赔付？",
            btns: [{
                txt: "确定",
                fn: function() {
                    var e = $(".J-confirm");
                    e.attr("disabled", "disabled"),
                    $.ajax({
                        url: a.order.cancelReparation,
                        method: "POST",
                        data: {
                            wmOrderViewId: o,
                            wmPoiId: s
                        },
                        success: function(a) {
                            e.removeAttr("disabled"),
                            0 === a.code ? (i.modal("hide"),
                            n.init(r),
                            t.showTip("取消配送赔付成功", "success")) : t.showTip("取消配送赔付失败,请稍后重试")
                        },
                        error: function() {
                            e.removeAttr("disabled"),
                            t.showTip("取消配送赔付失败,请稍后重试")
                        }
                    })
                }
            }, {
                txt: "取消",
                fn: function() {}
            }]
        })
    }
    $(document).on("click", ".J-apply-reparation", o),
    $(document).on("click", ".J-cancel-reparation", s);
    var n = new Object;
    return n.init = function(e) {
        var o = r(e);
        o.length && $.ajax({
            url: a.order.getReparationInfo,
            data: {
                orderInfos: JSON.stringify(o)
            },
            success: function(a) {
                if (0 === a.code) {
                    for (var a = a.data, e = 0, r = a.length; r > e; e++) {
                        var o = []
                          , s = ""
                          , i = ""
                          , d = ""
                          , c = a[e].statusCode
                          , p = $("#" + a[e].orderViewId);
                        switch (c) {
                        case 1:
                            s = "可申请配送赔付",
                            d = "申请赔付";
                            break;
                        case 2:
                            s = "超时限，不可申请配送赔付",
                            i = "已超出赔付申请时限（同意退款后48小时内可提起申请）";
                            break;
                        case 3:
                            s = "已经申请配送赔付",
                            i = "申请理由 ：" + a[e].applyReason + "<br>（" + a[e].promptTextForCansun + "）",
                            d = "取消申请";
                            break;
                        case 4:
                            s = "配送已同意赔付",
                            i = "该笔赔付会在本期账单计入";
                            break;
                        case 5:
                            s = "配送已拒绝赔付申请",
                            i = "拒绝理由 ：" + a[e].refuseReason,
                            d = "赔付申诉";
                            break;
                        case 6:
                            s = "超出赔付申诉时限",
                            i = "已超出赔付申诉时限（申请被拒绝后120小时内可申诉赔付）";
                            break;
                        case 7:
                            s = "已提交赔付申诉",
                            i = "申诉理由 ：" + a[e].applyReason + "<br>（" + a[e].promptTextForCansun + "）",
                            d = "取消申诉";
                            break;
                        case 8:
                            s = "客服已同意赔付",
                            i = "该笔赔付会在本期账单计入";
                            break;
                        case 9:
                            s = "客服已拒绝赔付申诉",
                            i = "拒绝理由 ：" + a[e].refuseReason;
                            break;
                        case 10:
                            s = "系统提交申请",
                            i = "系统已为您自动申请赔付，如为配送或平台责任，您将获得赔付金";
                            break;
                        case 11:
                            s = "申请通过",
                            i = "该赔付金将在下一次账期内打入";
                            break;
                        case 12:
                            s = "申请被驳回",
                            i = "驳回原因 ：" + a[e].refuseReason
                        }
                        o.push("<p><strong>" + CommConstants.shopCategoryObj.reparationG + '</strong></p><div class="reparation-step"><div class="posr"><span class="circle-dot"></span>' + s),
                        1 !== c && 2 !== c && 6 !== c && o.push('<span class="color-a2 pull-right">' + t.getTime("yyyy-MM-dd hh:mm", a[e].operatorTime) + "</span>"),
                        o.push('</div><div class="color-999">' + i + "</div>"),
                        (1 === c || 5 === c) && o.push('<div class="color-999">您可在 <span class="J-reparation-down color-main" data-remain-time="' + a[e].remainTime + '"  data-status="' + (1 === c ? 1 : 5) + '"></span> 内进行配送赔付</div>'),
                        (1 === c || 3 === c || 5 === c || 7 === c) && (o.push('<div class="posa reparation-ope">'),
                        1 === c || 5 === c ? o.push('<button class="btn btn-primary btn-sm btn-stable J-apply-reparation" data-status="' + (1 === c ? 1 : 5) + '"  data-apply-reason="' + a[e].applyReason + '" data-status-des="' + a[e].promptTextForCansun + '">' + d + "</button>") : o.push('<button class="btn btn-default btn-sm btn-stable J-cancel-reparation">' + d + "</button>"),
                        o.push("</div></div>")),
                        0 !== c ? p.find(".reparation-info").show().empty().append(o.join("")) : p.find(".reparation-info").hide()
                    }
                    $(".J-reparation-down").each(function(a, e) {
                        if (!$(e).hasClass("timing")) {
                            var r = $(e).parents(".order")
                              , o = parseInt($(e).data("remainTime"));
                            o >= 0 && ($(e).addClass("timing"),
                            t.countDown({
                                countStyle: !0,
                                time: o,
                                jQelem: $(e),
                                txt: "{time}",
                                cb: function() {
                                    n.init(r)
                                }
                            }))
                        }
                    })
                }
            }
        })
    }
    ,
    n
});
define("module/order/order_user_reparation_init", ["widgets/lazyload", "module/interface", "util/utils", "widgets/normal_dialog"], function(n, e, i, a) {
    var t = {
        refundRule1: "",
        refundRule2: "",
        refundAppeal1: "",
        refundAppeal2: "",
        deductionType1: "",
        deductionType2: "",
        appealTips: "",
        init: function(e) {
            var a = this
              , t = this._getParam(e);
            t.length && $.ajax({
                url: "/v2/order/refund/system/r/list",
                data: {
                    orderInfos: JSON.stringify(t)
                },
                success: function(e) {
                    if (0 === e.code) {
                        var e = e.data || {}
                          , t = e.wmEapiCompensationVoList || [];
                        t.forEach(function(n) {
                            var e = n.orderViewId
                              , a = "";
                            $target = $("#" + e),
                            a += '<p><strong>顾客赔偿</strong></p><div class="user-reparation-step"><div class="posr"><span class="circle-dot"></span>客服向顾客赔偿（商家承担）<span class="color-a2 pull-right">' + i.getTime("yyyy-MM-dd hh:mm", n.executeTime) + '</span></div><div class="color-999">赔偿金额 ：&yen;' + (n.amount / 100 || 0).toFixed(2) + ' <a href="javascript:void(0)" class="font-12 J-apeal-rule">赔偿规则</a></div><div class="color-999">赔偿原因 ：' + (n.secondReason || n.firstReason || "") + "</div>",
                            a += '<div class="img-box J-img-wrapper" data-loop="false">',
                            (n.attachList || []).forEach(function(n) {
                                a += '<img data-original="' + n + '" data-src="' + n + '" class="J-img-item">'
                            }),
                            a += "</div>",
                            a += '<div class="color-999 font-12">如您对本次赔偿有异议，可进行申诉 <button class="btn btn-xs btn-brand-hollow J-appeal">申诉</button></div></div>',
                            $target.find(".user-reparation-info").show().empty().append(a)
                        }),
                        n($("img")),
                        a.refundRule1 = a._joinString(e.refundRule1 || ""),
                        a.refundRule2 = a._joinString(e.refundRule2 || ""),
                        a.refundAppeal1 = e.refundAppeal1 || "",
                        a.refundAppeal2 = e.refundAppeal2 || "",
                        a.deductionType1 = e.deductionType1 || "",
                        a.deductionType2 = e.deductionType2 || "",
                        a.appealTips = e.appealTips || ""
                    }
                }
            })
        },
        _getParam: function(n) {
            var e = [];
            return n.each(function(n, i) {
                var a = {};
                a.wmOrderViewId = $(i).attr("data-view-id"),
                a.wmPoiId = $(i).data("poiId"),
                e.push(a)
            }),
            e
        },
        _joinString: function(n) {
            var e = n.split("&")
              , i = "";
            return e.forEach(function(n, e) {
                var a = n.split("#");
                a.forEach(function(n, a) {
                    i += 0 === a ? "<div>" + (e + 1) + "、" + n + "</div>" : "<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- " + n + "</div>"
                })
            }),
            i
        },
        bindEvt: function() {
            var n = this;
            $(document).on("click", ".J-appeal", function() {
                var e = a({
                    title: "顾客赔偿申诉",
                    content: n.appealTips,
                    btns: [{
                        txt: "我知道了",
                        fn: function() {
                            e.modal("hide")
                        }
                    }]
                })
                  , t = i.url2Cid();
                t && i.reportMC("b_shangou_online_e_o2roanin_mc", t)
            }),
            $(document).on("click", ".J-apeal-rule", function() {
                var e = "<h4>一、商家责任场景及扣款规则</h4>";
                e += "<div><strong>如遇以下商家责任导致的客户投诉，如客诉处理过程中产生额外的赔付成本，需商家承担：</strong></div>",
                e += n.refundRule1,
                e += "<br><div><strong>如遇以下商家责任导致的客户投诉，客服无需征得商家同意，可直接部分退款/退款给客户。商家无法申请餐损，且在客诉处理过程中产生额外的赔付成本，需商家承担：</strong></div>",
                e += n.refundRule2,
                e += "<br><h5>备注：以上商家承担的上限金额，如有权机关依法判定商家承担超过该上限金额的，则商家按照该有权机关判定金额承担赔偿。</h5>",
                e += "<br><h4>二、申诉方法及条件</h4>",
                e += "<div><strong>" + n.appealTips + "</strong></div>",
                e += "<div>1、" + n.refundAppeal1 + "</div>",
                e += "<div>2、" + n.refundAppeal2 + "</div>",
                e += "<br><h4>三、扣款方式</h4>",
                e += "<div>1、" + n.deductionType1 + "</div>",
                e += "<div>2、" + n.deductionType2 + "</div>";
                var t = a({
                    title: "赔偿规则",
                    content: e,
                    btns: [{
                        txt: "我知道了",
                        fn: function() {
                            t.modal("hide")
                        }
                    }],
                    size: "md",
                    "class": "apeal-modal"
                })
                  , d = i.url2Cid();
                d && i.reportMC("b_shangou_online_e_l0y6t3qf_mc", d)
            })
        }
    };
    return t.bindEvt(),
    t
});
define("module/order/order_responsibility_init", ["widgets/lazyload", "module/cookie", "module/interface", "widgets/normal_dialog", "widgets/check_bigPic", "widgets/ajaxfileupload", "util/utils"], function(i, e, s, t, a, n, r) {
    var l = {
        imgUrl: [],
        initResponsibilityDOM: function(e) {
            var s = [];
            e.each(function(i, e) {
                var t = {}
                  , a = $(e)
                  , n = a.data("status");
                9 == n && (t.wmOrderViewId = a.attr("data-view-id"),
                t.wmPoiId = a.data("poiId"),
                s.push(t))
            }),
            s.length && $.ajax({
                url: "/v2/order/confirm/responsibility/r/query",
                data: {
                    orderInfos: JSON.stringify(s)
                },
                success: function(e) {
                    if (0 == e.code) {
                        var e = e.data;
                        for (var s in e)
                            if (e[s].length > 0) {
                                var t = $("#" + s)
                                  , a = "<p><strong>订单定责</strong></p>";
                                e[s].forEach(function(i, e) {
                                    var s = i.status
                                      , n = ""
                                      , l = t.data("current-system-time")
                                      , o = i.ctime + i.staySeconds - l
                                      , c = i.ctime
                                      , d = r.getTime("MM-dd hh:mm", c)
                                      , p = (i.periodDesc,
                                    i.responsibleParty,
                                    i.responsiblePartyDesc)
                                      , m = i.remark
                                      , u = i.picUrls
                                      , f = "";
                                    switch (s) {
                                    case 1:
                                        n = "定责中...";
                                        break;
                                    case 2:
                                    case 51:
                                    case 52:
                                        n = p + "责任";
                                        break;
                                    case 53:
                                        n = "已过申诉时间";
                                        break;
                                    case 54:
                                        n = "提交申诉";
                                        break;
                                    case 55:
                                        n = "申诉中";
                                        break;
                                    case 56:
                                        n = "申诉通过";
                                        break;
                                    case 57:
                                        n = "申诉驳回"
                                    }
                                    a += '<div class="responsibility-step posr">',
                                    1 === s || 56 === s ? f = "color-main" : (53 === s || 57 === s) && (f = "c-red"),
                                    a += 52 === s ? '<div class="posr"><span class="circle-dot"></span><span class="color-main J-count-down" data-left-seconds="' + o + '"></span> 后失效<span class="color-a2 pull-right">' + d + "</span></div>" : '<div class="posr"><span class="circle-dot"></span><span class="' + f + '">' + n + '</span><span class="color-a2 pull-right">' + d + "</span></div>",
                                    1 !== s && (a += '<div class="color-999">' + m + "</div>"),
                                    52 === s && (a += '<button type="button" class="responsibility-ope J-responsibility-ope btn btn-primary btn-xs btn-stable posa">发起申诉</button>'),
                                    54 === s && (a += '<div class="img-box J-img-wrapper" data-loop="false">',
                                    u && (u = -1 !== u.indexOf("[") ? JSON.parse(u) : u.split(","),
                                    u.forEach(function(i) {
                                        a += '<img data-original="' + i + '" data-src="' + i + '" class="J-img-item" src="' + i + '">'
                                    })),
                                    a += "</div>"),
                                    a += "</div>"
                                }),
                                t.find(".responsibility-info").show().html(a),
                                $('[data-toggle="tooltip"]').tooltip(),
                                i($("img"))
                            }
                    }
                    $(".responsibility-info .J-count-down").each(function(i, e) {
                        var s = $(e)
                          , t = s.parents(".order")
                          , a = s.data("leftSeconds");
                        a && r.countDown({
                            countStyle: !0,
                            time: a,
                            jQelem: s,
                            txt: "{time}",
                            cb: function() {
                                t.find(".J-responsibility-ope").remove()
                            }
                        })
                    })
                }
            })
        },
        uploadPic: function() {
            var i = this
              , e = $("#J-img-input").get(0);
            if (e.files.length > 0) {
                var s = e.files[0];
                if (s.size > 5242880)
                    return void r.showTip("每张图片大小不能超过5M");
                var t = new FileReader;
                t.readAsDataURL(s),
                t.onload = function(e) {
                    var t = new Image;
                    t.onload = function() {
                        $.ajaxFileUpload({
                            url: "/v2/feedback/w/uploadImage",
                            secureuri: !1,
                            fileElementId: "J-img-input",
                            dataType: "text/html",
                            file: s,
                            success: function(e) {
                                var e = e.replace(/<.*?>/gi, "")
                                  , s = $("#J-img-input");
                                if (e = $.parseJSON(e),
                                1 === e.code)
                                    return r.showTip(e.msg, "error"),
                                    !1;
                                var t = '<div class="pull-left responsibility-img"><img src="' + e.data + '" alt=""><b class="delete">-</b></div>';
                                i.imgUrl.push(e.data),
                                $(".J-responsibility-con").prepend(t),
                                10 === i.imgUrl.length && $(".responsibility-img-add").hide(),
                                s.val("")
                            },
                            error: function(i) {
                                r.showTip(i.msg, "error")
                            }
                        })
                    }
                    ,
                    t.src = e.target.result
                }
            }
        },
        bindEvent: function() {
            var i = this;
            $(document).on("click", ".J-responsibility-ope", function() {
                i.imgUrl = [];
                var e = $(this).parents(".J-order")
                  , s = e.attr("data-view-id")
                  , a = e.data("poiId")
                  , n = '<div class="alert alert-dismissible" role="alert">提交申诉后，我们会在48小时内审核</div><div class="clearfix responsibility-item"><span class="responsibility-title pull-left"><b class="c-red">*</b>申诉理由</span><div class="responsibility-con pull-left"><textarea class="form-control noresize" placeholder="填写申诉理由，140字以内" maxlength="140" id="J-responsibility-textarea"></textarea><span class="responsibility-cnt color-999 font-12"><span class="J-responsibility-textarea-cnt">0</span>/140</span></div></div><div class="clearfix"> <span class="responsibility-title pull-left">上传图片</span><div class="responsibility-con J-responsibility-con pull-left"><div class="pull-left responsibility-img responsibility-img-add"> <i class="fa fa-camera color-999"></i> <input type="file" accept="image/gif, image/jpg, image/jpeg, image/png" id="J-img-input" name="file"></div></div></div>'
                  , l = t({
                    title: "定责申诉",
                    content: n,
                    btns: [{
                        txt: "提交",
                        fn: function() {
                            var t = $("#J-responsibility-textarea").val();
                            if (0 === $.trim(t).length)
                                return void r.showTip("申诉理由不能为空", "error");
                            var n = i.imgUrl.toString();
                            $.ajax({
                                url: "/v2/order/confirm/responsibility/w/appeal",
                                type: "POST",
                                data: {
                                    wmPoiId: a,
                                    wmOrderViewId: s,
                                    reason: t,
                                    picUrls: n
                                },
                                success: function(i) {
                                    0 === i.code && (e.remove(),
                                    parent.handleResponsibilityApply(-1),
                                    r.showTip("申诉成功", "success"),
                                    l.modal("hide"))
                                }
                            })
                        }
                    }, {
                        txt: "取消"
                    }],
                    size: "md",
                    "class": "responsibility-dialog"
                })
            }),
            $(document).on("keyup", "#J-responsibility-textarea", function() {
                var i = $(this)
                  , e = i.val().length;
                $(".J-responsibility-textarea-cnt").text(e)
            }),
            $(document).on("change", "#J-img-input", i.uploadPic.bind(this)),
            $(document).on("click", ".J-responsibility-con .delete", function() {
                var e = $(this).index(".delete");
                i.imgUrl.splice(e, 1),
                $(this).parents(".responsibility-img").remove(),
                $(".responsibility-img-add").show()
            })
        }
    };
    return l.bindEvent(),
    l
});
define('widgets/exception_prompt', ["widgets/normal_dialog"], function(t) {
    var e, i = document.getElementById("hashframe") ? document.getElementById("hashframe").contentWindow : window;
    try {
        e = i.document
    } catch (n) {
        console.error("frame blocked")
    }
    var o = function(t) {
        if (!(this instanceof o))
            return new o(t);
        if (this.mainTitle = t.mainTitle,
        this.subTile = t.subTile,
        t.target && (this.target = t.target),
        t.isDialog)
            this.isDialog = !0,
            this.html = '<h3 style="margin:0 0 10px 0;text-align:center;font-size:18px;color:#666;">' + t.mainTitle + '</h3><div style="color:#999;">' + t.subTile + "</div>";
        else {
            this.isDialog = !1;
            var e = t.type
              , i = "";
            i = 2 === e ? "no-wifi-icon fa fa-wifi" : "no-data-icon fa fa-file-text-o",
            this.html = '<div id="exception-pro" class="panel" style="width:500px;margin:0 auto;padding: 50px 0;text-align:center;"><i class="' + i + '"></i><h3 style="margin:20px 0 10px 0;font-size:18px;color:#666;">' + t.mainTitle + '</h3><div style="color:#999;"><span style="display:inline-block;text-align:left;">' + t.subTile + "</span></div></div>"
        }
    };
    return o.prototype.show = function() {
        if (this.isDialog)
            t({
                title: this.mainTitle,
                content: this.html,
                btns: [{
                    txt: "刷新",
                    fn: function() {
                        window.location.reload()
                    }
                }]
            });
        else {
            var i = $(e);
            this.target ? i.find(this.target).append(this.html) : i.find("body").append(this.html)
        }
        return this
    }
    ,
    o.hide = function() {
        var t, e = document.getElementById("hashframe") ? document.getElementById("hashframe").contentWindow : window;
        try {
            t = e.document;
            var i = $(t).find("#exception-pro");
            i.length > 0 && i.remove()
        } catch (n) {
            console.error("frame blocked")
        }
    }
    ,
    o
});
define("module/order/decrypt_info", ["module/cookie"], function(e) {
    function r(e) {
        var r = [];
        return e.forEach(function(e) {
            r.push({
                wmOrderViewId: e.wm_order_id_view_str,
                wmPoiId: e.wm_poi_id
            })
        }),
        {
            orderInfos: JSON.stringify(r)
        }
    }
    function n(e, r, n) {
        r.forEach(function(r) {
            var t = r.wm_order_id_view_str;
            e[t] && ["recipient_phone", "recipient_address", "order_phone"].forEach(function(r) {
                var o = '<img class="imgInfo-' + r + '" src = "' + e[t][r] + '">';
                n[t] && n[t][r] && n[t][r].html(o)
            })
        })
    }
    function t(t, a) {
        var c, s, f, p, h = [], u = [], _ = [], m = parseInt(e.getCookie("acctId")) % 10, v = {};
        if (t.forEach(function(e) {
            switch (c = $("#" + e.wm_order_id_view_str),
            s = c && c.find(".J-user-phone-main"),
            $prePhoneDom = 2 === e.showPrePhoneType && c && c.find(".J-order-user-phone-main"),
            f = c && c.find(".J-user-address"),
            p = c && c.find(".j-show-map"),
            v[e.wm_order_id_view_str] = {
                recipient_phone: s,
                recipient_address: f,
                order_phone: $prePhoneDom
            },
            e.encrypted) {
            case 0:
                break;
            case 1:
                s && s.text(o(e.recipient_phone, m));
                var r = o(e.recipient_address, m);
                f && f.text(r),
                p && p.data("addr", r),
                $prePhoneDom && $prePhoneDom.text(o(e.order_phone, m));
                break;
            case 2:
                h.push(e),
                f && f.text(o(e.recipient_address, m));
                break;
            case 3:
                u.push(e),
                d(e);
                break;
            case 4:
                _.push(e),
                f && f.text(o(e.recipient_address, m));
                break;
            case 5:
                d(e)
            }
        }),
        h.length && $.ajax({
            url: "/v2/order/history/r/getEncryptedString",
            type: "get",
            data: r(h),
            success: function(e) {
                if (0 === e.code) {
                    var r = e.data;
                    i(r.fontString, r.recipientPhone, v, "recipient_phone"),
                    r.orderPhone && i(r.fontString, r.orderPhone, v, "order_phone")
                }
            },
            error: function() {}
        }),
        _.length && a && a.fontString) {
            var l = {};
            _.forEach(function(e) {
                l[e.wm_order_id_view_str] = e.recipient_phone
            }),
            i(a.fontString, l, v, "recipient_phone")
        }
        u.length && $.ajax({
            url: "/v2/order/history/r/getImageString",
            type: "get",
            data: r(u),
            success: function(e) {
                if (0 === e.code) {
                    var r = e.data;
                    n(r, u, v)
                }
            },
            error: function() {}
        })
    }
    var o = function(e, r) {
        if (e) {
            for (var n = "", t = 0, o = e.length; o > t; t++)
                n += String.fromCharCode(e.charCodeAt(t) ^ r);
            return n
        }
        return ""
    }
      , i = function(e, r, n, t) {
        var o = "ff" + (new Date).getTime();
        $("head").append($('<style>@font-face{font-family:"' + o + '";src:url(data:application/font-woff;charset=utf-8;base64,' + e + ') format("woff");}.' + o + "{font-family:" + o + ";}</style>"));
        var i = function(e) {
            var r = e.split(";")
              , n = r.map(function(e) {
                return String.fromCharCode(e)
            });
            return n
        };
        if ("string" == typeof r)
            n.html('<span class="' + o + '">' + i(r).join("") + "</span>");
        else
            for (var a in r)
                n[a] && n[a][t] && n[a][t].html('<span class="' + o + '">' + i(r[a]).join("") + "</span>")
    }
      , a = function(e, r) {
        var n = '<div class="alert alert-warning" role="alert">' + r + "</div>";
        e.find(".user-info").each(function(e, r) {
            var t = $(r)
              , o = t.data("type");
            "order" !== o && t.prepend(n)
        })
    }
      , d = function(e) {
        $.ajax({
            url: "/v2/order/history/r/getEncryptTip",
            type: "get",
            success: function(r) {
                if (0 === r.code) {
                    var n = r.data;
                    if (n) {
                        var t = $("#" + e.wm_order_id_view_str);
                        a(t, n)
                    }
                }
            }
        })
    };
    return {
        init: t
    }
});
define("module/order/order_commodity_batch_info", ["module/cookie", "module/interface", "util/utils"], function(o, t, i) {
    var m = new Vue({
        el: "#commodity-batch-info",
        data: {
            displayModal: !1,
            title: "拣货提醒",
            tip: "",
            wmPoiId: -1,
            wmOrderViewId: "",
            productList: [],
            commodityBatchInfo: [],
            addedCommodityBatchInfoMap: {},
            afterSubmit: function() {}
        },
        watch: {
            productList: function(o) {
                var t = [];
                o.forEach(function(o) {
                    o.details.forEach(function(o) {
                        1 === o.productCategory && t.push({
                            commodityId: o.wm_food_id,
                            commodityName: o.food_name,
                            commodityNum: o.count,
                            commodityBatch: "",
                            productionTime: "",
                            expiryTime: "",
                            permanent: 0,
                            originalCount: o.count,
                            originalIndex: t.length,
                            isOriginal: !0
                        })
                    })
                }),
                this.commodityBatchInfo = t
            }
        },
        computed: {
            disableSubmit: function() {
                for (var o = ["commodityNum", "commodityBatch", "productionTime"], t = 0; t < this.commodityBatchInfo.length; t++) {
                    for (var i = this.commodityBatchInfo[t], m = 0; m < o.length; m++) {
                        var d = o[m];
                        if (!i[d])
                            return !0
                    }
                    if (!i.expiryTime && !i.permanent)
                        return !0
                }
                return !1
            }
        },
        methods: {
            showAdd: function(o) {
                var t = o.originalIndex
                  , i = o.commodityId
                  , m = [i, t].join("-")
                  , d = this.addedCommodityBatchInfoMap[m] || []
                  , n = o.commodityNum;
                return d.forEach(function(o) {
                    n += o.commodityNum || 0
                }),
                n < o.originalCount
            },
            addCommodity: function(o) {
                var t = o.originalIndex
                  , i = o.commodityId
                  , m = {
                    commodityId: i,
                    originalIndex: t,
                    commodityNum: 1,
                    commodityBatch: "",
                    productionTime: "",
                    expiryTime: "",
                    permanent: 0
                }
                  , d = [i, t].join("-");
                this.addedCommodityBatchInfoMap[d] || (this.addedCommodityBatchInfoMap[d] = []);
                var n = this.addedCommodityBatchInfoMap[d];
                n.push(m),
                this.commodityBatchInfo.splice(t + n.length, 0, m),
                this.commodityBatchInfo = this.commodityBatchInfo
            },
            deleteCommodity: function(o) {
                var t = o.originalIndex
                  , i = o.commodityId
                  , m = [i, t].join("-")
                  , d = this.addedCommodityBatchInfoMap[m]
                  , n = d.indexOf(o);
                d.splice(n, 1),
                this.commodityBatchInfo.splice(t + n + 1, 1),
                console.log(this.commodityBatchInfo)
            },
            validateCommodityNum: function() {
                for (var o = 0, t = 0; t < this.commodityBatchInfo.length; t++) {
                    var i = this.commodityBatchInfo[t]
                      , m = i.originalIndex
                      , d = i.commodityId;
                    if (i.isOriginal) {
                        var n = [d, m].join("-")
                          , a = this.addedCommodityBatchInfoMap[n] || [];
                        if (o = i.commodityNum,
                        a.forEach(function(t) {
                            o += t.commodityNum
                        }),
                        o !== i.originalCount)
                            return !1
                    }
                }
                return !0
            },
            changePermanent: function(o, t) {
                t.permanent = o ? 1 : 0
            },
            addDay: function(o, t) {
                var m = o ? new Date(o).getTime() : Date.now()
                  , d = m + 24 * t * 60 * 60 * 1e3;
                return i.getTime("yyyy-MM-dd", parseInt(d / 1e3))
            },
            transformFormData: function(o) {
                return o.map(function(o) {
                    return {
                        commodityId: o.commodityId,
                        commodityNum: o.commodityNum,
                        commodityBatch: o.commodityBatch,
                        productionTime: o.productionTime,
                        expiryTime: o.expiryTime,
                        permanent: o.permanent
                    }
                })
            },
            handleBatchChange: function(o, t) {
                this.$nextTick(function() {
                    t.commodityBatch = o.replace(/[^A-Za-z0-9]/g, "")
                })
            },
            handleSubmit: function() {
                if (console.log(this.commodityBatchInfo),
                !this.validateCommodityNum())
                    return void i.showTip("请重新核对发货数量！", "warn");
                var o = this;
                $.ajax({
                    url: t.order.sc.addCommodityBatchInfo,
                    type: "POST",
                    data: {
                        wmPoiId: this.wmPoiId,
                        wmOrderViewId: this.wmOrderViewId,
                        commodityBatchInfos: JSON.stringify(this.transformFormData(this.commodityBatchInfo))
                    },
                    success: function(t) {
                        0 === t.code ? (o.afterSubmit(),
                        o.displayModal = !1) : i.showTip("保存失败，请稍后重试！", "error")
                    },
                    error: function() {
                        i.showTip("保存失败，请稍后重试！", "error")
                    }
                })
            },
            handleCancel: function() {
                this.displayModal = !1
            }
        }
    });
    return {
        show: function(o) {
            m.displayModal = !0,
            m.title = o.title,
            m.tip = o.tip,
            m.wmPoiId = o.wmPoiId,
            m.wmOrderViewId = o.wmOrderViewId,
            m.productList = o.productList,
            m.afterSubmit = o.afterSubmit
        }
    }
});
define("module/order/order_status_track", ["module/cookie", "module/interface", "widgets/normal_dialog", "util/utils", "module/order/order_other_info", "module/order/order_commodity_batch_info", "module/order/order_delivery_init"], function(e, t, i, r, o, n, d) {
    var a = {
        reportCompleteMealTime: function(e) {
            function a() {
                if (g && g.indexOf(m) > -1)
                    s();
                else {
                    g ? r.setStorage("reportCompleteMealList", g + "," + m) : r.setStorage("reportCompleteMealList", m);
                    var e = new i({
                        title: y,
                        content: b,
                        btns: [{
                            txt: v + "完成",
                            fn: function() {
                                s(),
                                e.modal("hide")
                            }
                        }, {
                            txt: "取消",
                            fn: function() {
                                e.modal("hide")
                            }
                        }]
                    })
                }
            }
            function s() {
                $.ajax({
                    url: "/v2/common/w/reported/completeMealTime",
                    type: "post",
                    data: {
                        wmPoiId: m,
                        wmOrderViewId: u
                    },
                    success: function(e) {
                        if (0 == e.code) {
                            o.getOtherInfo(c);
                            var t = c.find(".J-delivery-section")
                              , n = t.data("teamCode")
                              , a = t.data("isExpress")
                              , s = t.data("deliveryStatus");
                            if ("1003" == n || "0000" == n)
                                return;
                            if (a)
                                return void (t.data("logisticsNo") && t.data("logisticsPlatName") || c.find(".J-change-logistics").trigger("click"));
                            if (-1 == s) {
                                if (1 == f)
                                    return;
                                var l = "您已" + v + '完成，是否立即发起配送？<div class="delivery-tip text-center J-delivery-tip">';
                                if (1003 == n && (l += '<button class="btn btn-primary J-trigger-send-delivery-myself">发起自配</button>'),
                                l += '<button class="btn btn-primary J-trigger-send-delivery">发起配送</button><button class="btn btn-default J-trigger-hide">暂不配送</button></div>',
                                c.data("isQiKe"))
                                    console.log("企客：刷新配送区域"),
                                    setTimeout(function() {
                                        d.initDeliveryDOM(c)
                                    }, 500);
                                else
                                    var u = new i({
                                        title: "发配送提醒",
                                        content: l,
                                        btns: []
                                    });
                                $(".J-delivery-tip").on("click", function(e) {
                                    u.modal("hide");
                                    var t = $(e.target);
                                    t.is(".J-trigger-send-delivery-myself") && c.find(".J-send-delivery-myself").trigger("click"),
                                    t.is(".J-trigger-send-delivery") && c.find(".J-send-delivery").trigger("click")
                                })
                            } else if (15 == s) {
                                var g = r.getStorage("complainRiderList");
                                if (!g || -1 === g.indexOf(m)) {
                                    var p = new i({
                                        title: "特殊提醒",
                                        content: "如骑手未到店，您可选择投诉骑手",
                                        btns: [{
                                            txt: "立即投诉",
                                            fn: function() {
                                                p.modal("hide"),
                                                c.find(".J-complain-rider").trigger("click")
                                            }
                                        }, {
                                            txt: "我知道了",
                                            fn: function() {
                                                p.modal("hide")
                                            }
                                        }]
                                    });
                                    g ? r.setStorage("complainRiderList", g + "," + m) : r.setStorage("complainRiderList", m)
                                }
                                "出餐" === v ? r.showTip("已记录出餐状态", "success") : r.showTip("已标记拣货完成", "success")
                            }
                        }
                    }
                })
            }
            var l = $(e.target)
              , c = l.parents(".J-order")
              , m = c.data("poiId")
              , f = c.data("pickType")
              , u = c.attr("data-view-id")
              , g = r.getStorage("reportCompleteMealList")
              , p = CommConstants.shopCate
              , v = "food" == p ? "出餐" : "拣货"
              , y = v + "提醒"
              , b = "请保证" + v + "情况真实可信，如骑手到店后商家实际未" + v + "完成，将会影响您的商家信誉积分";
            $.ajax({
                url: t.order.sc.checkCommodityBatchInfo,
                type: "GET",
                data: {
                    wmPoiId: m,
                    wmOrderViewId: u
                },
                success: function(e) {
                    var t = e.data;
                    if (0 === e.code && t.isMedical) {
                        var i = t.cartDetailVos || [];
                        n.show({
                            title: y,
                            tip: b,
                            wmPoiId: m,
                            wmOrderViewId: u,
                            productList: i,
                            afterSubmit: function() {
                                s()
                            }
                        })
                    } else
                        a()
                },
                error: a
            });
            var w = r.url2Cid();
            w && r.reportMC("b_5coyb293", w)
        },
        bindEvent: function() {
            var e = this;
            $(document).on("click", ".J-status-ope", e.reportCompleteMealTime)
        }
    };
    return a.bindEvent(),
    a
});
define("module/order/order_cycle_operate", ["module/interface", "widgets/normal_dialog", "module/cookie", "util/utils"], function(e, o, t, n) {
    function a(e) {
        var o = "";
        switch (e) {
        case 0:
            o = "待发货";
            break;
        case 20:
            o = "已发货";
            break;
        case 40:
            o = "已完成";
            break;
        case 100:
            o = "已取消";
            break;
        default:
            o = ""
        }
        return o
    }
    var i = "food" == CommConstants.shopCate ? "餐" : "货"
      , r = [{
        value: 1,
        label: "商品已售完"
    }, {
        value: 2,
        label: "地址无法配送"
    }, {
        value: 3,
        label: "店铺已打烊"
    }, {
        value: 4,
        label: "配送员取" + i + "慢"
    }, {
        value: 5,
        label: "店铺太忙"
    }, {
        value: 6,
        label: "配送员送" + i + "慢"
    }, {
        value: 7,
        label: "联系不上用户"
    }, {
        value: 8,
        label: "配送员丢" + i + "、少" + i + "、损坏" + i + "物"
    }, {
        value: 9,
        label: "重复订单"
    }, {
        value: 10,
        label: "其他"
    }]
      , c = new Vue({
        el: "#cycle-purchase-fulfill-modal",
        data: {
            fulfillModalVisible: !1,
            fulfillRecordData: {},
            tableData: [],
            highlightIndex: -1
        },
        created: function() {},
        methods: {
            onClose: function() {},
            closeBtn: function() {
                this.fulfillModalVisible = !1
            },
            assembleTableData: function(e) {
                if (e && !(e.length < 1)) {
                    var o = this
                      , t = e.length;
                    o.highlightIndex = -1,
                    o.tableData = [];
                    for (var n = 0; t > n; n++) {
                        var i = o.getFormatTime(e[n].estimateDate, e[n].estimateTimeDesc)
                          , r = e[n].preIncome ? "¥" + e[n].preIncome : "暂无";
                        o.tableData.push({
                            index: e[n].index,
                            isCurrentCycle: e[n].isCurrentCycle,
                            statusText: a(e[n].status),
                            status: e[n].status,
                            preIncome: r,
                            cycleFoodCount: "x" + e[n].cycleFoodCount,
                            deliveryTime: i,
                            logisticsCode: o.logisticsCodeConversion(e[n].logisticsCode)
                        }),
                        1 === e[n].isCurrentCycle && (o.highlightIndex = n)
                    }
                }
            },
            getFormatTime: function(e, o) {
                var t = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
                  , n = new Date(1e3 * e)
                  , a = n.getFullYear()
                  , i = n.getMonth() + 1
                  , r = n.getDate()
                  , c = t[n.getDay()];
                return a + "-" + i + "-" + r + " " + c + " " + o
            },
            logisticsCodeConversion: function(e) {
                var o = "";
                switch (e) {
                case "0000":
                    o = "商家自配";
                    break;
                default:
                    o = ""
                }
                return o
            },
            tableRowStyle: function(e) {
                return e === this.highlightIndex ? (this.$nextTick(function() {
                    document.querySelector("#cycle-purchase-fulfill-table-scroll .highlight").scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    })
                }),
                "highlight") : void 0
            }
        }
    })
      , l = new Vue({
        el: "#cycle-purchase-whole-cancel-modal",
        data: {
            wmPoiId: "",
            orderViewId: "",
            totalCycleCount: 0,
            wholeCancelModalVisible: !1,
            cancelReasonId: -1,
            cancelReasonArr: [],
            currentIndex: 0,
            oneSubReason: [],
            twoSubReason: "",
            commodityInfo: [],
            cancelOtherReason: "",
            poiStatus: -1,
            isOpen: !0,
            isNewOrder: 0,
            token: t.getCookie("token"),
            acctId: t.getCookie("acctId")
        },
        created: function() {},
        methods: {
            onClose: function() {
                this.cancelReasonId = -1,
                this.currentIndex = 0,
                this.oneSubReason = [],
                this.twoSubReason = "",
                this.commodityInfo = [],
                this.cancelOtherReason = "",
                this.poiStatus = -1,
                this.isOpen = !0,
                this.isNewOrder = 0
            },
            choiceReason: function(e) {
                this.currentIndex = e
            },
            getCancelReasonList: function(o, t, n) {
                var a = this;
                a.poiStatus = t,
                a.getCommodityInfo(),
                window.top.document.getElementById("select_poi_status_button_text") && (a.isOpen = "[已停止营业]" != window.top.document.getElementById("select_poi_status_button_text").innerHTML.trim()),
                a.$http.get(e.order.getCancelReasons, {
                    params: {
                        appType: "3",
                        wmPoiId: n,
                        wmOrderViewId: o
                    }
                }).then(function(e) {
                    var o = e.body;
                    0 === o.code && (a.cancelReasonArr = o.data,
                    a.wholeCancelModalVisible = !0)
                }, function(e) {
                    console.log(e)
                })
            },
            getCommodityInfo: function() {
                var e = this;
                e.$http.post("/api/order/cancelReasons/foods", {
                    wmPoiId: e.wmPoiId,
                    token: e.token,
                    acctId: e.acctId,
                    orderId: e.orderViewId
                }).then(function(o) {
                    var t = o.body;
                    0 === t.code ? e.commodityInfo = t.data || [] : e.$toast.warn(t.msg)
                }, function() {
                    e.$toast.warn("网络异常，请稍后重试")
                })
            },
            wholeCancelDetermine: function() {
                var e = this;
                e.isNewOrder = location.href.indexOf("receive/unprocessed") > -1 ? 1 : 0,
                -1 === e.cancelReasonId ? n.showTip("请先选择取消订单的原因！") : 12001 === e.cancelReasonId && e.commodityInfo.length > 0 ? 0 === e.oneSubReason.length ? n.showTip("您必须暂停售卖至少一样" + CommConstants.shopCategoryObj.merchandiseG + "！") : confirm("您确认要停售该" + CommConstants.shopCategoryObj.merchandiseG + "吗？") && e.wholeCancelInfoSubmit() : 12002 === e.cancelReasonId && e.isOpen && 3 != e.poiStatus ? e.twoSubReason && confirm("“确定要暂停营业吗？") ? e.wholeCancelInfoSubmit() : n.showTip("请先选择暂时停止营业时间！") : 12003 === e.cancelReasonId ? confirm("您确认要打烊吗？") && e.wholeCancelInfoSubmit() : 12999 === e.cancelReasonId && "" == e.cancelOtherReason.trim() ? n.showTip("取消原因不能为空！") : e.wholeCancelInfoSubmit()
            },
            wholeCancelInfoSubmit: function() {
                var o = this
                  , t = ""
                  , n = {}
                  , a = $("#acquire-page").length
                  , i = 12001 === o.cancelReasonId ? o.oneSubReason.join(",") : o.twoSubReason;
                n = {
                    appType: "3",
                    token: o.token,
                    acctId: o.acctId,
                    reasonId: o.cancelReasonId,
                    subRadioId: i,
                    remark: o.cancelOtherReason.trim(),
                    isInNewOrder: o.isNewOrder
                },
                a ? (n.wmOrderViewId = o.orderViewId,
                n.wmPoiId = o.wmPoiId,
                t = e.order.cancelAcquiredOrder) : (n.orderId = o.orderViewId,
                n.wmPoiId = o.wmPoiId,
                t = e.order.cancelOrder),
                o.$http.post(t, n).then(function(e) {
                    var t = e.body;
                    0 === t.code ? (o.isNewOrder ? o.removeOrder(o.orderViewId) : $("#" + o.orderViewId).remove(),
                    o.$toast.success("整单取消成功")) : o.$toast.warn(t.msg),
                    o.wholeCancelModalVisible = !1,
                    location.href.indexOf("reminder") > -1 ? setTimeout(function() {
                        window.location.reload()
                    }, 15e3) : setTimeout(function() {
                        window.location.reload()
                    }, 1e3)
                }, function() {
                    o.$toast.warn("操作失败，请重试")
                })
            },
            removeOrder: function(e) {
                var o = parent.NewOrder;
                if (n.showTip("订单处理成功！请到“已处理”中查看"),
                $("#" + e).length > 0) {
                    $("#" + e).remove();
                    var t = localStorage.getItem("count")
                      , a = t - 1;
                    0 > a && (a = 0),
                    o.updateCount(a)
                }
            }
        }
    })
      , d = new Vue({
        el: "#cycle-purchase-section-cancel-modal",
        data: {
            wmPoiId: "",
            orderViewId: "",
            sectionCancelModalVisible: !1,
            tableData: [],
            highlightIndex: -1,
            refundReasonOptions: r,
            allChecked: !1,
            refundAmount: 0,
            refundReasonCode: null,
            refundReasonText: "",
            refundOtherReason: ""
        },
        created: function() {},
        methods: {
            open: function() {
                this.sectionCancelModalVisible = !0
            },
            onClose: function() {
                this.allChecked = !1,
                this.refundAmount = 0,
                this.refundReasonCode = null,
                this.refundReasonText = "",
                this.refundOtherReason = ""
            },
            assembleTableData: function(e) {
                if (e && !(e.length < 1)) {
                    var o = this
                      , t = e.length;
                    o.highlightIndex = -1,
                    o.tableData = [];
                    for (var n = 0; t > n; n++) {
                        var i = o.getFormatTime(e[n].estimateDate, e[n].estimateTimeDesc);
                        o.tableData.push({
                            index: e[n].index,
                            isCurrentCycle: e[n].isCurrentCycle,
                            statusText: a(e[n].status),
                            status: e[n].status,
                            refundMoney: e[n].refundMoney ? "¥" + e[n].refundMoney : "暂无",
                            cycleFoodCount: "x" + e[n].foodInfos[0].count,
                            deliveryTime: i,
                            imageUrl: e[n].foodInfos[0].imageUrl,
                            foodName: e[n].foodInfos[0].foodName,
                            checkFlag: !1,
                            foodInfos: e[n].foodInfos[0]
                        }),
                        1 === e[n].isCurrentCycle && (o.highlightIndex = n)
                    }
                }
            },
            getFormatTime: function(e, o) {
                var t = new Date(1e3 * e)
                  , n = t.getMonth() + 1
                  , a = t.getDate();
                return n + "-" + a + " " + o
            },
            tableRowStyle: function(e) {
                return e === this.highlightIndex ? "highlight" : void 0
            },
            onSingleCheckChange: function(e) {
                var o = 0;
                this.tableData.map(function(t) {
                    t.index === e.index && (t.checkFlag = !e.checkFlag),
                    t.checkFlag && o++
                }),
                this.allChecked = o === this.tableData.length,
                this.calPartRefundPrice()
            },
            onAllCheckChange: function(e) {
                this.tableData.map(function(o) {
                    o.checkFlag = e
                }),
                this.calPartRefundPrice()
            },
            calPartRefundPrice: function() {
                var o = this
                  , t = {}
                  , n = [];
                o.tableData.map(function(e) {
                    e.checkFlag && n.push({
                        deliveryCycle: e.index,
                        foodInfos: [{
                            count: e.foodInfos.count,
                            itemId: e.foodInfos.itemId,
                            wmFoodId: e.foodInfos.wmFoodId
                        }]
                    })
                }),
                n.length && (t.wmPoiId = o.wmPoiId,
                t.orderViewId = o.orderViewId,
                t.cycleDetail = JSON.stringify(n),
                o.$http.post(e.order.sc.calPartRefundPrice, t).then(function(e) {
                    var t = e.body;
                    0 === t.code ? o.refundAmount = t.data : o.$toast.warn(t.msg)
                }, function() {
                    o.$toast.warn("网络异常，请稍后重试")
                }))
            },
            filterEmoji: function(e) {
                var o = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEff]|\uD83E[\uDD00-\uDDFF]|[\u2600-\u27FF]/gi;
                return o.test(e) && (e = e.replace(o, "")),
                e
            },
            handleInputOtherReasonChange: function(e) {
                var o = this;
                o.refundOtherReason = o.filterEmoji(e),
                o.refundReasonText = o.refundOtherReason
            },
            handleRefundReasonChange: function(e) {
                var o = this;
                return 10 === e ? (o.refundOtherReason = "",
                void (o.refundReasonText = o.refundOtherReason)) : void o.refundReasonOptions.forEach(function(t) {
                    10 !== e && e === t.value && (o.refundReasonText = t.label)
                })
            },
            partRefundSubmit: function() {
                var o = this
                  , t = {}
                  , n = [];
                return 10 !== o.refundReasonCode || o.refundOtherReason ? null !== o.refundReasonCode && o.refundReasonText ? (o.tableData.map(function(e) {
                    e.checkFlag && n.push({
                        deliveryCycle: e.index,
                        foodInfos: [{
                            count: e.foodInfos.count,
                            itemId: e.foodInfos.itemId,
                            wmFoodId: e.foodInfos.wmFoodId
                        }]
                    })
                }),
                n.length ? (t.wmPoiId = o.wmPoiId,
                t.orderViewId = o.orderViewId,
                t.reason = o.refundReasonText,
                t.cycleDetail = JSON.stringify(n),
                void o.$http.post(e.order.sc.partRefundSubmit, t).then(function(e) {
                    var t = e.body;
                    0 === t.code ? (o.$toast.success("提交成功"),
                    o.sectionCancelModalVisible = !1,
                    window.location.reload()) : o.$toast.warn(t.msg)
                }, function() {
                    o.$toast.warn("网络异常，请稍后重试")
                })) : void o.$toast.warn("请选择退款商品")) : void o.$toast.warn("退款理由为空，请选择") : void o.$toast.warn("其他原因填写为空")
            }
        }
    })
      , s = {
        viewFulfillRecord: function(o) {
            var t = $(o.target).parents(".order")
              , a = t.data("viewId")
              , i = t.data("poiId");
            $.ajax({
                type: "GET",
                url: e.order.sc.fulfillRecordList,
                data: {
                    orderViewId: a,
                    wmPoiId: i
                },
                success: function(e) {
                    0 == e.code ? (console.log("====cyclePurchaseFulfillSetVm====", e.data),
                    c.fulfillRecordData = e.data,
                    c.assembleTableData(e.data.cyclePerformanceOrderList),
                    c.fulfillModalVisible = !0) : n.showTip(e.msg)
                }
            })
        },
        orderWholeCancel: function(e) {
            var o = $(e.target).parents(".order")
              , t = o.data("viewId")
              , a = o.data("poiId");
            totalCycleCount = o.data("totalCycleCount"),
            $.ajax({
                url: "/common/status",
                data: {
                    orderId: t,
                    poiId: a
                },
                success: function(e) {
                    0 == e.code ? (totalCycleCount,
                    l.wmPoiId = a,
                    l.orderViewId = t,
                    l.totalCycleCount = totalCycleCount,
                    l.getCancelReasonList(t, e.data, a)) : n.showTip(e.msg)
                },
                error: function() {
                    n.showTip("操作失败，请重试")
                }
            });
            var i = n.url2Cid();
            i && n.reportMC("b_shangou_online_e_0lp7sgr1_mc", i)
        },
        orderSectionCancel: function(o) {
            var t = $(o.target).parents(".order")
              , a = t.data("viewId")
              , i = t.data("poiId");
            $.ajax({
                type: "GET",
                url: e.order.sc.cyclePartRefund,
                data: {
                    orderViewId: a,
                    wmPoiId: i
                },
                success: function(e) {
                    0 == e.code ? (console.log("====cyclePurchaseSectionCancelSetVm====", e.data),
                    d.assembleTableData(e.data.refundFoodCycleDetailList),
                    d.wmPoiId = i,
                    d.orderViewId = a,
                    d.sectionCancelModalVisible = !0) : n.showTip(e.msg)
                }
            });
            var r = n.url2Cid();
            r && n.reportMC("b_shangou_online_e_s3cyz8vo_mc", r)
        },
        bindEvent: function() {
            var e = this
              , o = $(document);
            o.off("click", ".J-fulfill-record").off("click", ".J-cycle-section-cancel").off("click", ".J-cycle-whole-cancel"),
            o.on("click", ".J-fulfill-record", e.viewFulfillRecord.bind(e)).on("click", ".J-cycle-section-cancel", e.orderSectionCancel.bind(e)).on("click", ".J-cycle-whole-cancel", e.orderWholeCancel.bind(e))
        }
    };
    return s.bindEvent(),
    s
});
define("module/order/order_list_dom_epidemic_register", [], function(e, i) {
    var t = {
        init: function(e, i) {
            var t = this;
            e.each(function(e, r) {
                var s = {};
                s.wmOrderViewId = $(r).attr("data-view-id"),
                s.itemData = i.filter(function(e) {
                    return e.wm_order_id_view_str === s.wmOrderViewId
                })[0],
                1 === s.itemData.isMedicineOrder && t.createEpidemicRegisterDOM(s.wmOrderViewId, s.itemData.wm_poi_id)
            })
        },
        createEpidemicRegisterDOM: function(e, i) {
            new Vue({
                el: "#medicine_order_" + e,
                template: "#epidemicItem",
                data: {
                    temperature: "",
                    hasBeenToDangerousArea: "",
                    symptomDesc: "",
                    imgs: [],
                    showImg: !1,
                    showImgURL: "",
                    showEpidemicRegister: !1
                },
                created: function() {
                    this.getData()
                },
                methods: {
                    getData: function() {
                        this.$http.get("/health/pc/medicineSaleRule/findMedicineCodeOrderInfo", {
                            params: {
                                wmOrderId: e,
                                wmPoiId: i,
                                isMedicineOrder: 1
                            }
                        }).then(function(e) {
                            const i = e.data;
                            if (0 === i.code) {
                                var t = i.data;
                                this.showEpidemicRegister = t ? !0 : !1,
                                this.temperature = t.temperature,
                                this.symptomDesc = t.symptomDesc,
                                this.hasBeenToDangerousArea = t.hasBeenToDangerousArea,
                                t.healthCodeUrl && this.imgs.push({
                                    url: t.healthCodeUrl,
                                    msg: "健康码"
                                }),
                                t.routeCodeUrl && this.imgs.push({
                                    url: t.routeCodeUrl,
                                    msg: "行程码"
                                })
                            }
                        })
                    },
                    handleImgReview: function(e) {
                        this.showImgURL = e,
                        this.showImg = !0
                    }
                }
            })
        }
    };
    return t
});
define("module/order/order_info_change", ["module/order/order_list_dom_time", "module/order/order_list_dom_phone"], function(e, i) {
    return function(d) {
        var a = d.orderViewId
          , r = $("#" + a)
          , t = r.data("poi-id");
        r && r.size() > 0 && $.ajax({
            url: "/v2/order/receive/processed/r/querywithin3h",
            method: "GET",
            data: {
                orderViewId: a,
                wmPoiId: t
            },
            success: function(d) {
                if (0 === d.code) {
                    var a = d.data
                      , t = r.find(".J-order-time")
                      , n = r.find(".j-user-nick-name")
                      , o = r.find(".J-user-phone-address")
                      , s = r.data("pick-type")
                      , _ = r.data("pre")
                      , p = r.data("encrypted")
                      , c = a.Recipient_Address
                      , l = a.recipient_name
                      , u = a.distance
                      , h = a.address_longitude
                      , m = a.address_latitude
                      , v = a.estimate_arrival_time_fmt
                      , f = "";
                    if ("undefined" == p || 0 == p) {
                        n.text(l),
                        t.html(e(s, _, v, v)),
                        o.html(i({
                            encrypted: p,
                            hide_flag: !0,
                            is_use_privacy_phone: a.Is_Privacy_Phone,
                            recipient_phone: a.Recipient_Phone,
                            pick_type: s,
                            privacy_phone_status: a.privacy_phone_status,
                            privacy_phone: a.Privacy_Phone,
                            backup_privacy_phones: a.Backup_Privacy_Phones,
                            is_display_bindedPhone: a.is_display_bindedPhone,
                            recipient_bindedPhone: a.Recipient_bindedPhone,
                            recipient_address: c,
                            mask_address: !1,
                            poi_latitude: a.poi_latitude,
                            poi_longitude: a.poi_longitude,
                            address_latitude: m,
                            address_longitude: h
                        })),
                        o.append('<div class="alert alert-info change-tips" role="alert">顾客收货信息已变更</div>');
                        var y = r.find(".j-show-map");
                        y.data("distance", u),
                        f = u > 1e3 ? (u / 1e3).toFixed(1) + "km" : "<1km",
                        y.text(" " + f)
                    } else
                        location.reload()
                }
            }
        })
    }
});
define("module/order/order_msg_handler", ["module/order/order_info_change", "module/order/order_status", "module/order/order_other_info", "module/order/order_delivery_init", "module/order/order_charge_init", "module/order/order_slidebar"], function(e, r, d, o, i, n) {
    "use strict";
    window.onmessage = function(t) {
        var a;
        try {
            a = JSON.parse(t.data)
        } catch (t) {
            a = {}
        }
        if (console.log("订单相关信息:", a),
        "fromPushMessage" == a.handlerType) {
            var s = a.code;
            if (3 == s || 26 == s) {
                var u, f;
                if (3 == s) {
                    u = a.orderViewId;
                    var l = window.dispose
                      , m = [];
                    m.push(u),
                    "undefined" != typeof l && l(m),
                    setTimeout(function() {
                        n.getUnprocessedCount()
                    }, 500)
                } else
                    u = a.wm_order_view_id;
                f = $("#" + u),
                f && f.size() > 0 && d.getOtherInfo(f, !0)
            }
            if (12 == s || 32 == s) {
                var u = a.wmOrderViewId
                  , f = $("#" + u);
                f && f.size() > 0 && o.initDeliveryDOM(f)
            }
            if (16 == s || 24 == s) {
                var u, f;
                u = 16 == s ? a.wmOrderViewId : a.wm_order_view_id,
                f = $("#" + u),
                f && f.size() > 0 && i.init(f)
            }
            if ((15 == s || 16 == s || 17 == s) && r.checkOrderStatus(a),
            28 == s) {
                var u = a.wm_order_id
                  , f = $("#" + u);
                f && f.size() > 0 && d.getOtherInfo(f)
            }
            if (54 == s && e(a),
            55 == s) {
                var u = a.wmOrderViewId
                  , f = $("#" + u);
                f && f.size() > 0 && d.getOtherInfo(f, !0)
            }
            if (56 == s) {
                var u = a.wm_order_id
                  , f = $("#" + u);
                f && f.size() > 0 && d.getOtherInfo(f, !0)
            }
        }
        "changeChildDom" == a.handlerType && $("#assemblePreCount").text(a.count),
        "analyseOrder" == a.handlerType && window.analyse && window.analyse(a.orderData, a.fontString),
        "removeOrder" == a.handlerType && $("#" + a.orderViewId).remove(),
        "updateRefundCount" == a.handlerType && $("#refundCount").text(a.count)
    }
});
define("module/order/order_list", ["module/printer", "module/order/printorder", "module/order/order_map", "module/order/order_common", "module/order/order_charge_init", "module/order/order_delivery_init", "module/order/order_refund_clothes_init", "module/order/order_refund_part", "module/order/order_remind_init", "module/interface", "util/utils", "widgets/pagination_kangarooui", "module/order/order_list_dom", "lib/underscore.min", "module/order/order_reparation", "module/order/order_user_reparation_init", "module/order/order_responsibility_init", "module/order/order_other_info", "widgets/exception_prompt", "module/order/order_slidebar", "module/order/decrypt_info", "components/img_verify", "module/order/order_status_track", "module/order/order_cycle_operate", "module/order/order_list_dom_cycle", "module/order/order_list_dom_epidemic_register", "module/order/order_msg_handler", "module/cookie"], function(e, r, t, o, a, i, d, l, n, s, u, m, g, c, f, p, _, h, y, C, b, v, x, L, S, w, O, I) {
    "use strict";
    function J(e, r, t) {
        t ? T(null, null, e) : r ? T(null, null, e, r) : P = m.create({
            $pel: q,
            loadData: function(r, t) {
                T(r, t, e)
            }
        }),
        "function" != typeof e.bindQueryEvts || M || (e.bindQueryEvts(P),
        M = !0)
    }
    function T(r, o, l, s) {
        var m = l.getQueryFields();
        r && m && (m.pageNum = r);
        try {
            var c = e.allPrinters(!0).length
        } catch (C) {}
        D.html("").loading({
            backdrop: !1
        }),
        y.hide(),
        q.hide(),
        $.get(l.queryUrl, m, function(e) {
            if ("0" == e.code) {
                var r = []
                  , m = e.wmOrderList || e.data && (e.data.orderList || e.data.wmOrderList) || []
                  , C = ["/v2/order/receive/processed/r/query", "/v2/order/receive/unprocessed/r/ofq", "/v2/order/pre/r/query", "/v2/order/history/r/query"];
                if (-1 === C.indexOf(l.queryUrl) && m.forEach(function(e) {
                    e.isMedicineOrder = 0
                }),
                m && m.length > 0) {
                    q.show(),
                    s && $(".J-pagination-new").removeClass("hide");
                    for (var x in m)
                        r.push(g(m[x], !1, c));
                    D.html(r.join("")).show(),
                    $("[data-toggle=tooltip]").tooltip();
                    var L = $(".J-order");
                    a.init(L, m),
                    S.initCycleDOM(L, m),
                    i.initDeliveryDOM(L),
                    w.init(L, m),
                    b.init(m, {
                        fontString: e.fontString
                    }),
                    $.get("/sc/retail/express/get/warehouseInfos", {
                        acctId: I.getCookie("acctId"),
                        wmPoiId: -1
                    }).then(function(e) {
                        0 === e.code && (sessionStorage.setItem("warehouseList", JSON.stringify(e.data)),
                        d.initRefundDOM(L, l))
                    }),
                    _.initResponsibilityDOM(L),
                    location.href.indexOf("order/reminder") > -1 && n.initRemindDOM(L),
                    f.init(L),
                    p.init(L),
                    h.getCollectionState(L),
                    t.loadMapData(),
                    "1" !== localStorage.getItem("isChain") && $(".J-order-owner").hide(),
                    "true" === localStorage.getItem("hasChatCapability") && $(".J-start-chat").removeClass("hide")
                } else {
                    s && $(".J-pagination-new").addClass("hide"),
                    D.html("");
                    var O = location.href.indexOf("/r/search") > -1 ? !0 : !1;
                    y({
                        isDialog: !1,
                        mainTitle: "暂无指定订单",
                        subTile: O ? "没有找到相关订单，请确保您输入的信息正确（支持按订单序号/订单号/手机号后4位/地址搜索）" : "暂时没有该筛选条件的订单，稍后再来看看吧!",
                        target: ".J-order-list"
                    }).show()
                }
                if (W.text(e.totalCount),
                o) {
                    var J = e.pageCount ? e.pageCount : e.data && e.data.pageCount;
                    o(J || 0)
                }
                "function" == typeof l.dataGotCb && l.dataGotCb(e),
                e.data && (e.data.lastCtime || 0 == e.data.lastCtime) && localStorage.setItem("lastCtime", e.data.lastCtime),
                e.data && (e.data.lastTargetWmPoi || 0 === e.data.lastTargetWmPoi) && localStorage.setItem("lastTargetWmPoi", e.data.lastTargetWmPoi),
                e.data && (e.data.nextCtime || 0 === e.data.nextCtime) && localStorage.setItem("nextCtime", e.data.nextCtime),
                e.data && (e.data.nextTargetWmPoi || 0 === e.data.nextTargetWmPoi) && localStorage.setItem("nextTargetWmPoi", e.data.nextTargetWmPoi),
                e && (e.lastLabel || "" === e.lastLabel) && (e.lastLabel && (e.lastLabel = JSON.stringify(e.lastLabel)),
                localStorage.setItem("lastLabel", e.lastLabel)),
                e && (e.nextLabel || "" === e.nextLabel) && (e.nextLabel && (e.nextLabel = JSON.stringify(e.nextLabel)),
                localStorage.setItem("nextLabel", e.nextLabel)),
                e && (e.pageCursor || "" === e.pageCursor) && (e.pageCursor && (e.pageCursor = JSON.stringify(e.pageCursor)),
                localStorage.setItem("orderPageCursor", e.pageCursor)),
                "function" == typeof l.afterLoaded && l.afterLoaded()
            } else
                999 === e.code ? new Vue({
                    el: "#verify_img",
                    data: {
                        url: l.queryUrl
                    },
                    components: [v],
                    template: '<div id="verify_img"><img-verify :url="url" v-if="true"></img-verify></div>'
                }) : (u.showTip(e.msg, "error"),
                D.html(""),
                y({
                    isDialog: !1,
                    mainTitle: "暂无指定订单",
                    subTile: "数据异常，请稍后再来看看吧!",
                    target: ".J-order-list"
                }).show(),
                "function" == typeof l.failCb && l.failCb())
        }).fail(function() {
            "function" == typeof l.failCb && l.failCb()
        })
    }
    var P = null
      , D = $(".J-order-list")
      , W = $(".J-order-count")
      , q = $(".J-pagination")
      , M = !1;
    return C.init(),
    {
        init: J
    }
});
require.config({
    baseUrl: VM.STATIC_URL,
    paths: {}
}),
define('module/order/warehouse_select', ["module/cookie"], function(e) {
    return {
        el: "#warehouse-box",
        data: function() {
            return {
                acctId: "",
                wmPoiId: "",
                options: [],
                warehouseId: -1
            }
        },
        mounted: function() {
            this.acctId = e.getCookie("acctId"),
            this.wmPoiId = e.getCookie("wmPoiId"),
            this.queryWarehouseList()
        },
        computed: {
            showWarehouseSelect: function() {
                return -1 !== this.wmPoiId && this.options.length > 2
            }
        },
        methods: {
            queryWarehouseList: function() {
                var e = this;
                this.$http.get("/sc/retail/express/get/warehouseInfos", {
                    params: {
                        acctId: this.acctId,
                        wmPoiId: this.wmPoiId
                    }
                }).then(function(o) {
                    var t = o.body;
                    if (0 === t.code) {
                        var s = t.data || [];
                        e.options = s.map(function(e) {
                            return {
                                value: e.id,
                                label: e.name
                            }
                        }),
                        e.options.unshift({
                            value: -1,
                            label: "全部"
                        })
                    } else
                        e.$toast.error(t.msg)
                })
            },
            handleChangeWarehouse: function(e) {
                console.log(e),
                this.warehouseId = e,
                this.refundInit()
            }
        },
        template: '<div id="warehouse-box" class="form-group J-status" style="padding-top: 5px" v-if="showWarehouseSelect">  <label class="control-label col-xs-1">选择仓库</label>  <div class="col-xs-11">    <kui-select      :options="options"      :value="warehouseId"      class="col-xs-4"      style="padding-left: 0"      @change="handleChangeWarehouse"      placeholder="请选择仓库"    />  </div></div>'
    }
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
require(["module/general", "module/cookie", "module/interface", "module/order/order_list", "module/order/warehouse_select", "util/utils"], function(e, t, a, o, r, n) {
    "use strict";
    function i() {
        var e = C.val()
          , t = h.val()
          , a = n.getOffsetDays(e, t)
          , o = 7;
        if (1e3 >= c) {
            if (a > o)
                return n.showTip("查询时间段限制在" + o + "天以内，请重新选择日期", "warn"),
                !1
        } else if (a > 1)
            return n.showTip("查询时间段限制在1天以内，请重新选择日期", "warn"),
            !1;
        return !0
    }
    function s() {
        o.init({
            queryUrl: CommConstants.newCategory ? a.order.sc.getProcessedRefund : a.order.getProcessedRefund,
            getQueryFields: function() {
                var e = {};
                return CommConstants.newCategory ? (e.status = p,
                localStorage.setItem("refundStatus", p)) : e.getNewVo = 1,
                e.startDate = $("#J-start").val(),
                e.endDate = $("#J-end").val(),
                e.acctId = d,
                e.wmPoiId = u,
                e.pagePoint = m,
                e.ctime = g,
                e.targetWmPoi = f,
                -1 !== l.warehouseId && (e.warehouseId = l.warehouseId),
                e
            },
            bindQueryEvts: function(e) {
                $(".J-date").on("dp.change", function() {
                    D.data("DateTimePicker").minDate(C.val()),
                    k.data("DateTimePicker").maxDate(h.val()),
                    m = 0,
                    g = 0,
                    f = 0,
                    i() && s()
                })
            },
            afterLoaded: function() {
                $(".J-jump-page").removeAttr("disabled"),
                0 == localStorage.getItem("lastCtime") && $(".J-prev-page").attr("disabled", "disabled"),
                0 == localStorage.getItem("nextCtime") && $(".J-next-page").attr("disabled", "disabled")
            }
        }, !0)
    }
    r.methods.refundInit = s;
    var l = new Vue(r)
      , d = t.getCookie("acctId")
      , u = t.getCookie("wmPoiId")
      , c = $("#J-poi-size").val()
      , m = 0
      , g = 0
      , f = 0
      , p = +(localStorage.getItem("refundStatus") || 0);
    CommConstants.newCategory && ($(".J-refund-status").find("input[value=" + p + "]").prop("checked", !0),
    $(".J-refund-status").show().find("input").click(function() {
        p = $(this).val(),
        i() && s()
    }),
    $("#status-2").parent().remove());
    var w = n.changeDate(1)
      , v = n.changeDate(91)
      , C = $("#J-start")
      , h = $("#J-end")
      , k = $(".J-start-date")
      , D = $(".J-end-date");
    k.datetimepicker({
        format: "YYYY-MM-DD",
        minDate: v,
        maxDate: h.val(),
        keepOpen: !1,
        showTodayButton: !0,
        showClear: !0
    }),
    D.datetimepicker({
        format: "YYYY-MM-DD",
        minDate: C.val(),
        maxDate: w,
        keepOpen: !1,
        showTodayButton: !0,
        showClear: !0
    }),
    i() && s(),
    $(".J-next-page").click(function() {
        m = 1,
        g = localStorage.getItem("nextCtime"),
        f = localStorage.getItem("nextTargetWmPoi"),
        i() && s()
    }),
    $(".J-prev-page").click(function() {
        m = 2,
        g = localStorage.getItem("lastCtime"),
        f = localStorage.getItem("lastTargetWmPoi"),
        i() && s()
    }),
    n.reportMC("b_shangou_online_e_5a8kk2jr_mc", "c_o1skm0jl", null, null, {
        button_nm: "已处理"
    }),
    n.reportPV("c_o1skm0jl", {
        des: "PC退单"
    })
});
define("page/order/refund/processed", function() {});
