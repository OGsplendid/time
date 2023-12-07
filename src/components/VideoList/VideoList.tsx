import { IList } from '../../module';
import { Video } from '../Video/Video';

export const VideoList = ({ list }: IList) => {
    return list.map(item => <Video url={item.url} date={item.date} />);
}
