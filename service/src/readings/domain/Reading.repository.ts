import { TReading } from './Reading';

type TReadingRepository = {
  persist(song: TReading): Promise<void>;
};

export default TReadingRepository;
