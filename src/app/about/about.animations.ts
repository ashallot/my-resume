import { trigger, style, transition, animate } from '@angular/animations';

export const zState = 
trigger('zState', [
  transition("void => *", [//in
    style({ 
        opacity: 0,
        color: '#f0f0f0',
    }),
    animate(500, style({ 
        opacity: 1,
        color: '#f0f0f0',
        'font-size': '16px'
    }))
  ]),
  transition("* => void", [//out
    animate(500, style({ 
        opacity: 0,
        color: '#f0f0f0',
    }))
  ])
]);
// export const moveState = 
// trigger('moveState',[
//   transition("void => *", [//in
//     animate(1000, style({ 
//         scrollTop:640
//     }))
//   ]),
//   transition("* => void", [//out
//     animate(1000, style({ 
//     }))
//   ])
// ]);