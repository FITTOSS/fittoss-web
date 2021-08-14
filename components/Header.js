import { useRouter } from 'next/router';
import Link from 'next/link';
import { PureComponent } from 'react';

export default class Header extends PureComponent {
    render(){
        return(
            <div>
                <Link href='/'>Home</Link>
            </div>
        );
    }
}