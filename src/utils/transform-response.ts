import { IDataResponse } from 'src/interfaces/data.response.interface';

export const TransformResponse = (res: any): IDataResponse[] => {
  let tempArr: IDataResponse[] = [];
  res.RelatedTopics.map((topic: any) => {
    if (topic.Topics) {
      topic.Topics.map((t: any) => {
        tempArr = [...tempArr, { url: t.FirstURL, text: t.Text }];
      });
    } else {
      tempArr = [...tempArr, { url: topic.FirstURL, text: topic.Text }];
    }
    return topic;
  });

  return tempArr;
};
