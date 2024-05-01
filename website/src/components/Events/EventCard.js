  
  export default function EventCard({event}) {

    return (
            <article key={event.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                    src={event.imageUrl.eventImage}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={event.datetime} className="text-gray-500">
                    {event.date}
                    </time>
                    <a
                    href={event.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                    {event.category.title}
                    </a>
                </div>
                <div className="group relative max-w-xl">
                    <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={event.href}>
                        <span className="absolute inset-0" />
                        {event.title}
                    </a>
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{event.address}</p>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{event.description}</p>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                    <img src={event.host.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                        <a href={event.host.href}>
                            <span className="absolute inset-0" />
                            {event.host.name}
                        </a>
                        </p>
                        <p className="text-gray-600">{event.host.role}</p>
                    </div>
                    </div>
                </div>
                </div>
            </article>
    )
  }