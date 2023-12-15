import { LogoutButton } from "./LogoutButton";
import { getAuth } from "../../services/auth";

export const User = async () => {
  const session = await getAuth();
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <img
          src={session!.user.image ?? ''}
          alt="Avatar"
        />
        <div className="card-body">
          <h2 className="card-title">{session!.user.name}</h2>
          <p>{session!.user.email}</p>
          <p>{session!.user.id}</p>
          <div className="card-actions justify-end">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};
