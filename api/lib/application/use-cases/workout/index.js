//body parts
import GetAllBodyPartsUseCase from './body-part/get-all-body-parts-use-case'
import GetBodyPartByIdUseCase from './body-part/get-body-part-by-id-use-case'
import AddBodyPartUseCase from './body-part/add-body-part-use-case'
import UpdateBodyPartUseCase from './body-part/update-body-part-use-case'
import DeleteBodyPartUseCase from './body-part/delete-body-part-use-case'

//stretch movement
import GetStretchMovementByBodyPartIdUseCase from './stretch-movement/get-stretch-movement-by-body-part-id-use-case'

//stretch session
import GetAllStretchSessionsUseCase from './stretch-session/get-all-stretch-sessions-use-case'
import GetStretchSessionByIdUseCase from './stretch-session/get-stretch-session-by-id-use-case'

//stretch challenge
import GetAllStretchChallengesUseCase from './stretch-challenge/get-all-stretch-challenges-use-case'
import GetStretchChallengeByIdUseCase from './stretch-challenge/get-stretch-challenge-by-id-use-case'

//user - stretch challenge
import GetStretchChallengesByUserIdUseCase from './user--stretch-challenge/get-stretch-challenges-by-user-id-use-case'
import AddUserStretchChallengeUseCase from './user--stretch-challenge/add-user-stretch-challenge-use-case'
import DeleteUserStretchChallengeUseCase from './user--stretch-challenge/delete-user-stretch-challenge-use-case'
import UpdateUserStretchChallengeUseCase from './user--stretch-challenge/update-user-stretch-challenge-use-case'

export {
  //body part
  GetAllBodyPartsUseCase,
  GetBodyPartByIdUseCase,
  AddBodyPartUseCase,
  UpdateBodyPartUseCase,
  DeleteBodyPartUseCase,
  //stretch movement
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  GetStretchMovementByBodyPartIdUseCase,
  GetAllStretchChallengesUseCase,
  GetStretchChallengeByIdUseCase,
  GetStretchChallengesByUserIdUseCase,
  AddUserStretchChallengeUseCase,
  DeleteUserStretchChallengeUseCase,
  UpdateUserStretchChallengeUseCase,
}
