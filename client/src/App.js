import './App.css';
import Customer from './components/customer' ;
import {Table} from 'react-bootstrap' ;
const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' : '최여옥',
  'birthday' : '701020',
  'gender' : '여자',
  'job' : '프로그래머'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '630215',
  'gender' : '남자',
  'job' : '자영업'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name' : '가나다',
  'birthday' : '690315',
  'gender' : '여자',
  'job' : '한복대여'
}]

function App() {
  return (
    <div>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이미지</th>
              <th>이름</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>직업</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((a,i)=>{
                return(
                  <Customer key={a.id}
                    id={a.id}
                    image = {a.image}
                    name = {a.name}
                    birthday = {a.birthday}
                    gender = {a.gender}
                    job = {a.job} />
              )})
            }
          </tbody>
        </Table>
      </div>
  );
}

export default App;
