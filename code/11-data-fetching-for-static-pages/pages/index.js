import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  //const [loadedMeetups, setLoadedMeetups] =useState([]);
  //왜 괄호안에 []임? 
  //setLoadedMeetups : 상태 업데이트 함수 
  //이페이지가 렌더링되면서 http 요청을 보내기 위해서는 요청객체인 useEffect 훅을 사용한다 
  //컴포넌트 함수가 실행되고 나서 useeffect 가 실행이 된다 
  //첫번째 렌더링 : loadMeetups 초기상태여서 비어있다 / 두번째 렌더링 : 
  //next는 사전 렌더링을 하기 때문에 두번째를 기다릴 생각이 없다 어떻게 문제 해결?
  // useEffect(()=>{
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // },[]); //여기에 데이터를 가져올 수 있다. 어떻게?

  return <MeetupList meetups={props.memetups} />;
}

export async function getStaticProps() {
  //사전 렌더링 프로세스 중에 이 함수를 실행하고 컴포넌트 함수 호출 
  //promise 기다린다 
  //컴포넌트 실행 전에 데이터 읽기 
  //서버에 접근하는 코드를 실행하 ㄹ수 있다 
  //클라이언트 실행 x 
  //api, 데이터 베이스 접근 가능 
  // fetch data from an API
  return {
    //여기에 정의한 props 가 홈페이지함수로 가서 데이터가 props 에 담긴다 
    props: {
      meetups: DUMMY_MEETUPS
    }
  }; 
}
//빌드, 프로세스 과정이 머임?
export default HomePage;
