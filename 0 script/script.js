import script1 from '../1 script/script';
import script2 from '../2 script/script';
import script3 from '../3 script/script';
import script4 from '../4 script/script';
import script5 from '../5 script/script';
import script6 from '../6 script/script';

function script0() {
    let a = 5, b = 7, c;
    c = a;
    a = b;
    b = c;
    alert(a + " " + b);

    a = 5, b = 7;
    a = a + b;
    b = a - b;
    a = a - b;
    alert(a + " " + b);
}

script0();
script1();
script2();
script3();
script4();
script5();
script6();