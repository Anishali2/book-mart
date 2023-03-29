import { navigation } from '@/constants/dashboard'
import { classNames } from '@/helpers/classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const DashboardSidebar = () => {
  const route = useRouter().query?.route
  return (
    <div>
      <div className="px-5 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.route}
            className={classNames(
              item.route == route
                ? 'bg-light-background text-primary'
                : 'text-secondary hover:text-white hover:bg-cyan-600',
              'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
            )}
            aria-current={item.route == route ? 'page' : undefined}
          >
            <Image
              alt="icon"
              width={20}
              height={20}
              src={
                item.route == route
                  ? `${item.icon}-active.png`
                  : `${item.icon}.png`
              }
            />
            <span className="ml-2 capitalize">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebar
