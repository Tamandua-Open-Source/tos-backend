//body parts
import GetAllBodyPartsUseCase from './body-part/get-all-body-parts-use-case'
import GetBodyPartByIdUseCase from './body-part/get-body-part-by-id-use-case'
import AddBodyPartUseCase from './body-part/add-body-part-use-case'
import UpdateBodyPartUseCase from './body-part/update-body-part-use-case'
import DeleteBodyPartUseCase from './body-part/delete-body-part-use-case'

//stretch movement - body part
import GetStretchMovementsByBodyPartIdUseCase from './stretch-movement--body-part/get-stretch-movements-by-body-part-id-use-case'
import AddStretchMovementBodyPartUseCase from './stretch-movement--body-part/add-stretch-movement-body-part-use-case'
import DeleteStretchMovementBodyPartUseCase from './stretch-movement--body-part/delete-stretch-movement-body-part-use-case'

//stretch movement
import GetAllStretchMovementsUseCase from './stretch-movement/get-all-stretch-movements-use-case'
import GetStretchMovementByIdUseCase from './stretch-movement/get-stretch-movement-by-id-use-case'
import AddStretchMovementUseCase from './stretch-movement/add-stretch-movement-use-case'
import UpdateStretchMovementUseCase from './stretch-movement/update-stretch-movement-use-case'
import DeleteStretchMovementUseCase from './stretch-movement/delete-stretch-movement-use-case'

//stretch session - stretch movement
import GetStretchSessionsByStretchMovementIdUseCase from './stretch-session--stretch-movement/get-stretch-sessions-by-stretch-movement-id-use-case'
import AddStretchSessionStretchMovementUseCase from './stretch-session--stretch-movement/add-stretch-session-stretch-movement-use-case'
import DeleteStretchSessionStretchMovementUseCase from './stretch-session--stretch-movement/delete-stretch-session-stretch-movement-use-case'

//stretch session
import GetAllStretchSessionsUseCase from './stretch-session/get-all-stretch-sessions-use-case'
import GetStretchSessionByIdUseCase from './stretch-session/get-stretch-session-by-id-use-case'
import AddStretchSessionUseCase from './stretch-session/add-stretch-session-use-case'
import UpdateStretchSessionUseCase from './stretch-session/update-stretch-session-use-case'
import DeleteStretchSessionUseCase from './stretch-session/delete-stretch-session-use-case'

//stretch challenge - stretch session
import GetStretchChallengesByStretchSessionIdUseCase from './stretch-challenge--stretch-session/get-stretch-challenges-by-stretch-session-id-use-case'
import AddStretchChallengeStretchSessionUseCase from './stretch-challenge--stretch-session/add-stretch-challenge-stretch-session-use-case'
import DeleteStretchChallengeStretchSessionUseCase from './stretch-challenge--stretch-session/delete-stretch-challenge-stretch-session-use-case'

//stretch challenge
import GetAllStretchChallengesUseCase from './stretch-challenge/get-all-stretch-challenges-use-case'
import GetStretchChallengeByIdUseCase from './stretch-challenge/get-stretch-challenge-by-id-use-case'
import AddStretchChallengeUseCase from './stretch-challenge/add-stretch-challenge-use-case'
import UpdateStretchChallengeUseCase from './stretch-challenge/update-stretch-challenge-use-case'
import DeleteStretchChallengeUseCase from './stretch-challenge/delete-stretch-challenge-use-case'

//user - styretch movement
import GetStretchMovementsByUserIdUseCase from './user--stretch-movement/get-stretch-movements-by-user-id-use-case'
import AddUserStretchMovementUseCase from './user--stretch-movement/add-user-stretch-movement-use-case'
import UpdateUserStretchMovementUseCase from './user--stretch-movement/update-user-stretch-movement-use-case'
import DeleteUserStretchMovementUseCase from './user--stretch-movement/delete-user-stretch-movement-use-case'

//user - stretch session
import GetStretchSessionsByUserIdUseCase from './user--stretch-session/get-stretch-sessions-by-user-id-use-case'
import AddUserStretchSessionUseCase from './user--stretch-session/add-user-stretch-session-use-case'
import UpdateUserStretchSessionUseCase from './user--stretch-session/update-user-stretch-session-use-case'
import DeleteUserStretchSessionUseCase from './user--stretch-session/delete-user-stretch-session-use-case'

//user - stretch challenge
import GetStretchChallengesByUserIdUseCase from './user--stretch-challenge/get-stretch-challenges-by-user-id-use-case'
import AddUserStretchChallengeUseCase from './user--stretch-challenge/add-user-stretch-challenge-use-case'
import UpdateUserStretchChallengeUseCase from './user--stretch-challenge/update-user-stretch-challenge-use-case'
import DeleteUserStretchChallengeUseCase from './user--stretch-challenge/delete-user-stretch-challenge-use-case'

//recommendation
import GetRecommendedStretchMovementsUseCase from './recommendation/get-recommended-stretch-movements-use-case'
import GetRecommendedStretchSessionsUseCase from './recommendation/get-recommended-stretch-sessions-use-case'
import GetRecommendedStretchChallengesUseCase from './recommendation/get-recommended-stretch-challenges-use-case'

export {
  //body part
  GetAllBodyPartsUseCase,
  GetBodyPartByIdUseCase,
  AddBodyPartUseCase,
  UpdateBodyPartUseCase,
  DeleteBodyPartUseCase,
  //stretch movement - body part
  GetStretchMovementsByBodyPartIdUseCase,
  AddStretchMovementBodyPartUseCase,
  DeleteStretchMovementBodyPartUseCase,
  //stretch movement
  GetAllStretchMovementsUseCase,
  GetStretchMovementByIdUseCase,
  AddStretchMovementUseCase,
  UpdateStretchMovementUseCase,
  DeleteStretchMovementUseCase,
  //stretch session - stretch movement
  GetStretchSessionsByStretchMovementIdUseCase,
  AddStretchSessionStretchMovementUseCase,
  DeleteStretchSessionStretchMovementUseCase,
  //stretch session
  GetAllStretchSessionsUseCase,
  GetStretchSessionByIdUseCase,
  AddStretchSessionUseCase,
  UpdateStretchSessionUseCase,
  DeleteStretchSessionUseCase,
  //stretch challenge - stretch session
  GetStretchChallengesByStretchSessionIdUseCase,
  AddStretchChallengeStretchSessionUseCase,
  DeleteStretchChallengeStretchSessionUseCase,
  //stretch challenge
  GetAllStretchChallengesUseCase,
  GetStretchChallengeByIdUseCase,
  AddStretchChallengeUseCase,
  UpdateStretchChallengeUseCase,
  DeleteStretchChallengeUseCase,
  //user - stretch movement
  GetStretchMovementsByUserIdUseCase,
  AddUserStretchMovementUseCase,
  UpdateUserStretchMovementUseCase,
  DeleteUserStretchMovementUseCase,
  //user - stretch session
  GetStretchSessionsByUserIdUseCase,
  AddUserStretchSessionUseCase,
  UpdateUserStretchSessionUseCase,
  DeleteUserStretchSessionUseCase,
  //user - stretch challenge
  GetStretchChallengesByUserIdUseCase,
  AddUserStretchChallengeUseCase,
  UpdateUserStretchChallengeUseCase,
  DeleteUserStretchChallengeUseCase,
  //recommendation
  GetRecommendedStretchMovementsUseCase,
  GetRecommendedStretchSessionsUseCase,
  GetRecommendedStretchChallengesUseCase,
}
