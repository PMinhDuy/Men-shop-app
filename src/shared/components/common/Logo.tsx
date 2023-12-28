import { SkinFilled } from '@ant-design/icons';

function Logo() {
  return (
    <div className="flex justify-between cursor-pointer gap-2 items-center">
      <SkinFilled style={{ fontSize: '42px' }} className="text-yellow-500" />
      <div className="flex flex-col leading-none">
        <div className="uppercase font-serif font-extrabold tracking-widest text-white">
          duyca <span className="ml-[-4px] text-yellow-500">shop</span>
        </div>
        <p className="text-xs text-yellow-500 italic">Fashion Lifestyle</p>
      </div>
    </div>
  );
}

export default Logo;
