import Link from "next/link";

export const ContainerLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full items-center">
        <div>
          <Link href="/">
            <a>
              <h1 className="font-bold text-4xl pt-5 pb-5">Public Storage</h1>
            </a>
          </Link>
        </div>

        <div className="flex flex-row gap-5">
          <div>
            <Link href="/upload">
              <a>
                <div className="bg-black text-white font-bold p-2 rounded-md">
                  Upload
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};
