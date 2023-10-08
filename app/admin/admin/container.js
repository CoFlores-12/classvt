import ListaUsers from "@/app/components/listaUsers";
import Listas from "@/app/components/listas";

export default function Container({children, active}) {
    switch (active) {
        case 'Home':
            return (
                <div id='Home'>
                    <center>Home</center>
                </div>
            )
            break;
        case 'Classes':
            return (
                <div id='Classes'>
                    <Listas role={'classes'} items={[{
  _id: ("651041ec199552144ab4e699"),
  name: 'Class 1',
  code: 'IS101',
  assig: [
    {
      name: 'Work 1',
      description: 'Upload PDF',
      due: '24/09/2023,23:59',
      start: '24/09/2023,08:00',
      done: [Array],
      _id: ("651050d085132b44da1ed894")
    },
    {
      name: 'Quiz 1',
      due: '24/09/2023,20:59',
      start: '24/09/2023,20:00',
      description: 'first partial topics',
      done: [],
      _id: ("65105be685132b44da1ed895")
    }
  ],
  color: '#00007750',
  bg: 'https://trotwood.org/wp-content/uploads/2022/10/Computer-Class.jpg',
  students: [ '650f4025bbc4cae7613343f9' ]
}]}/>
                </div>
            )
            break;
        case 'Teachers':
            return (
                <div id='Teachers'>
                    <ListaUsers items={[{"_id":{"$oid":"6518cde6733acf44fc316434"},"name":"Teacher","username":"test","password":"test","role":"student","img":"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png","classes":[{"name":"Class 1","id":"65103ce9199552144ab4e698"}]}]} />
                </div>
            )
            break;
        case 'Students':
            return (
                <div id='Students'>
                    <ListaUsers items={[{"_id":{"$oid":"6518cde6733acf44fc316434"},"name":"test","username":"test","password":"test","role":"student","img":"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png","classes":[{"name":"Class 1","id":"65103ce9199552144ab4e698"}]}]} />
                </div>
            )
            break;
        default:
            break;
    }
}