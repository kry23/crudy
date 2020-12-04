import {Router,Request,Response,NextFunction} from 'express'

const amazingRouter = Router();

amazingRouter.get('/',(req:Request, res:Response) => {
    res.send('Hello World!')
  })
  amazingRouter.get('/:id', (req:Request, res:Response) => {
    res.send('Hello World!')
  })
  amazingRouter.post('/',  (req:Request, res:Response) => {
    res.send('Got a POST request')
  })

  amazingRouter.put('/:id',  (req:Request, res:Response) =>{
    res.send('Got a PUT request at /user')
  })

  amazingRouter.delete('/:id',  (req:Request, res:Response) => {
    res.send('Got a DELETE request at /user')
  })


  export {amazingRouter};