'use client';
import { AiOutlineMenu } from 'react-icons/ai'
import React,{ useCallback,useState } from 'react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
   currentUser?: SafeUser | null
 }
 
 const UserMenu: React.FC<UserMenuProps> = ({
   currentUser
 }) => {

   const registerModal = useRegisterModal();
   const loginModal = useLoginModal();

    const[isOpen,setIsOpen] = useState(false);
    const toggleOpen = useCallback(() =>{
        setIsOpen((value)=> !value);
    }, [])
const UserMenu = () => {
	const rentModal = useRentModal();
	const onRent = useCallback(() => {
		rentModal.onOpen();
	},[rentModal]);
	// const onRent = useCallback(() => {
	// 	if (!currentUser) {
	// 		return loginModal.onOpen();
	// 	}

	// 	rentModal.onOpen();
	// },[loginModal,rentModal,currentUser]);
	const [isOpen,setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	},[])

	return (
		<div className=" relative">
			<div className=" flex flex-row items-center gap-3 ">
				<div
					onClick={(onRent)}
					className=" 
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
         ">
					Airbnb your House

				</div>

				<div
					onClick={toggleOpen}

					className=" 
           p-4
           md:py-1
           md:px-2
           border-[1px]
           border-neutral-200
           flex
           flex-row
           items-center
           rounded-full
            hover:shadow-md
            transition
          
           "
				>

<<<<<<< HEAD
              <AiOutlineMenu/>
              <div className="hidden md:block px-2">
                
                    <Avatar src={currentUser?.image} />
              </div>
           </div>
        </div>
=======
					<AiOutlineMenu />
					<div className="hidden md:block px-2">
>>>>>>> f72ee3f03b1023fba3db143ea8876b0511493d76

						<Avatar />
					</div>
				</div>
			</div>

			{isOpen && (
				<div className=" 
             absolute
             rounded-xl
             shadow-md
             bg-white
             w-[40vw]
             md:w-3/4
             overflow-hidden
             right-0
             top-12
             text-sm
<<<<<<< HEAD
            "> 
               <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem 
                 
                  onClick={() => {}}
                  label="My Profile" 
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => {}}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={() => {}}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
            </div>
          )}
                
        </div>
    );
=======
			             ">
					<div className=" flex flex-col cursor-pointer">
						<>
							<MenuItem
								onClick={() => { }}
								label="Login"
							/>

							<MenuItem
								onClick={() => { }}
								label="Sign up"
							/>
						</>

					</div>
				</div>
			)}

		</div>
	);
>>>>>>> f72ee3f03b1023fba3db143ea8876b0511493d76
};

export default UserMenu;