Hello guys,
I have an issue using transloco with ignite grid (https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid.html). I was able to find a workaround to it, but I am not so happy with the solution.

In my example, to set initials sorting and filtering options, I need to get access to the grid using `@ViewChild`, so I can use the grid reference in the methods `ngOnInit` and `ngAfterViewInit`. As the ignite grid uses `ChangeDetectionStrategy.OnPush`, I am using the change detector in `ngAfterViewInit`.

Following the transloco docs, I used the structural directive to get the translations, and here is where I have the problem. The transloco structural directive doesn't create the template immediately, it waits for the translation has been loaded to build it. So I lose the angular life cycle (ngOnInit and ngAfterViewInit) where I am using the grid because the grid was not rendered yet there. To make it work, I need to subscribe to the transloco events and set the sorting and filtering options just after the translations be loaded. Moreover, I need to add the delay(0) operator to have an extra cycle and get the grid. Even doing it, I still need to set the filtering and sorting options in the ngAfterViewInit to be able to have it in the second time that I am visiting the same page because then the translations are already loaded and I will not receive a new event from the transloco events.

I did a simplified example here:

I could use pipes, but it is less efficient because it creates a new subscription for each pipe. Do you have any better solution for it?

If there is any other better way to do it, my suggestion to avoid to lose the normal life cycle is to just hide the template instead of delay its creation. The user will not see the template changing the translation keys to the real translation text, cause the template is hidden, and we can still use the normal life cycle to get access to the template.
