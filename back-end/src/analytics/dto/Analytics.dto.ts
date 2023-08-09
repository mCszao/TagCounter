import { ISelector } from '../../interface/ISelector';

export interface IAnalyticsDTO {
    url: string;
    tagSet: Array<ISelector>;
}

// export class AnalyticsDTO implements IAnalyticsDTO {
//     public tagSet: Array<ISelector>;
//     public url: string;
//     constructor(props: IAnalyticsDTO) {
//         this.tagSet = props.tagSet;
//         this.url = props.url;
//     }
// }
