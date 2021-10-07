"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformResponse = void 0;
const data_response_interface_1 = require("../interfaces/data.response.interface");
exports.TransformResponse = (res) => {
    let tempArr = [];
    res.RelatedTopics.map((topic) => {
        if (topic.Topics) {
            topic.Topics.map((t) => {
                tempArr = [...tempArr, { url: t.FirstURL, text: t.Text }];
            });
        }
        else {
            tempArr = [...tempArr, { url: topic.FirstURL, text: topic.Text }];
        }
        return topic;
    });
    return tempArr;
};
//# sourceMappingURL=transform-response.js.map