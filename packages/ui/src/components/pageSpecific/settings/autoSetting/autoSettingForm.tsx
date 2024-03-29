import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@ulld/tailwind/select';
import {  Input} from '@ulld/tailwind/input';
import {   Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@ulld/tailwind/form';
import { autoSetting } from '@ulld/database/internalDatabaseTypes';
import React from 'react'
import { UseFormReturn } from 'react-hook-form';



interface AutoSettingFormProps {
    form: UseFormReturn<{
        type: "subject" | "tag" | "topic";
        value: string;
        glob: string;
        id?: number | undefined;
    }, any, undefined>
}

const autoSettingDisplayMap: { [k in autoSetting]: string } = {
    tag: "Tag",
    topic: "Topic",
    subject: "Subject"
}

const AutoSettingForm = ({ form }: AutoSettingFormProps) => {
    return (
        <Form {...form}>
            <form className="space-y-6">
                <FormField
                    control={form.control}
                    name="glob"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Glob</FormLabel>
                            <FormControl>
                                <Input placeholder="/**" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is passed to the `glob-to-regexp` package to match files automatically.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className={"grid grid-cols-1 xs:grid-cols-[1fr_120px] gap-5"}>
                    <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                    <Input placeholder={`someAuto${autoSettingDisplayMap[form.watch("type")]}`} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="What type of auto-property?" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.keys(autoSetting).map((a) => {
                                            return <SelectItem key={a} value={a}>{autoSettingDisplayMap[a as autoSetting]}</SelectItem>
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}


AutoSettingForm.displayName = "AutoSettingForm"


export default AutoSettingForm;
